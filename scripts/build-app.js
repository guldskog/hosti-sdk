const fs = require("fs");
const { zip } = require("zip-a-folder");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const postCssPlugin = require("esbuild-style-plugin");

const esbuild = require("esbuild");

const { id, version } = require("../src/manifest.json");

esbuild
  .build({
    entryPoints: ["./src/app.tsx"],
    bundle: true,
    outfile: "tmp/app.js",
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
    publicPath: "#{AssetsBaseUri}#",
    plugins: [
      postCssPlugin({
        postcss: {
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
      }),
    ],
    logLevel: "error",
    banner: {
      js: `// ${id} ${version}`,
      css: `/* ${id} ${version} */`,
    },
  })
  .then(async () => {
    fs.copyFile("./src/manifest.json", "tmp/manifest.json", (err) => {
      if (err) {
        throw err;
      }
    });

    fs.readFile("tmp/app.css", (err, css) => {
      postcss([autoprefixer])
        .process(css, { from: "tmp/app.css", to: "tmp/app.css" })
        .then(({ css }) => {
          fs.writeFile("tmp/app.css", css, () => true);
        });
    });

    await zip("tmp", `./app.zip`);

    const jsStats = fs.statSync("tmp/app.js");
    const jsKbSize = Math.floor(jsStats.size / 1024);
    const cssStats = fs.statSync("tmp/app.css");
    const cssKbSize = Math.floor(cssStats.size / 1024);

    console.log("Script:", jsKbSize, "kb");
    console.log("CSS:", cssKbSize, "kb");
    console.log("");
    console.log(`app.zip`, jsKbSize + cssKbSize, "kb");
    console.log("");

    fs.rmSync("tmp", { recursive: true });
  });
