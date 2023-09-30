const fs = require("fs");
const { exec } = require("child_process");
const esbuild = require("esbuild");

const manifestPath = "./src/manifest.json";

const bumpVersion = process.argv.find((arg) => arg === "--bump-version");

exec("git rev-parse --abbrev-ref HEAD", (err, stdout) => {
  if (!stdout.trim().startsWith("apps/")) {
    throw new Error('Branch out "apps/{appId}" then try again!');
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath));

  if (bumpVersion) {
    manifest.version += 1;
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, " "));
  }

  const appId = stdout.trim().replace("apps/", "");

  esbuild
    .build({
      entryPoints: ["./src/app.ts"],
      bundle: true,
      outfile: "dist/app.js",
      mainFields: ["module", "main"],
      format: "esm",
      minify: true,
      loader: {
        ".png": "file",
        ".jpg": "file",
        ".jpeg": "file",
        ".svg": "file",
        ".gif": "file",
      },
      publicPath: `https://hosti.app/apps/${appId}/`,
      plugins: [],
      logLevel: "error",
      banner: {
        js: `// ${appId} ${manifest.version}`,
        css: `/* ${appId} ${manifest.version} */`,
      },
    })
    .then(async () => {
      fs.copyFile("./src/manifest.json", "dist/manifest.json", (err) => {
        if (err) {
          throw err;
        }
      });

      const jsStats = fs.statSync("dist/app.js");
      const jsKbSize = Math.floor(jsStats.size / 1024);
      const cssStats = fs.statSync("dist/app.css");
      const cssKbSize = Math.floor(cssStats.size / 1024);

      console.log("App ID:", appId);
      console.log("Version:", manifest.version);
      console.log("Script:", jsKbSize, "kb");
      console.log("CSS:", cssKbSize, "kb");
      console.log("");
    });
});
