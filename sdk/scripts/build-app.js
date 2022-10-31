const fs = require("fs");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const postCssPlugin = require("esbuild-style-plugin");

const esbuild = require("esbuild");

const { id, version } = require("../../src/manifest.json");

esbuild
  .build({
    entryPoints: ["./src/app.tsx"],
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
    publicPath: `https://hosti.app/apps/${id}/`,
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
    fs.copyFile("./src/manifest.json", "dist/manifest.json", (err) => {
      if (err) {
        throw err;
      }
    });

    fs.readFile("dist/app.css", (err, css) => {
      postcss([autoprefixer])
        .process(css, { from: "dist/app.css", to: "dist/app.css" })
        .then(({ css }) => {
          fs.writeFile("dist/app.css", css, () => true);
        });
    });

    const jsStats = fs.statSync("dist/app.js");
    const jsKbSize = Math.floor(jsStats.size / 1024);
    const cssStats = fs.statSync("dist/app.css");
    const cssKbSize = Math.floor(cssStats.size / 1024);

    console.log("Script:", jsKbSize, "kb");
    console.log("CSS:", cssKbSize, "kb");
    console.log("");
  });
