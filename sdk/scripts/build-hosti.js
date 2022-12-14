const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["./sdk/hosti/index.ts"],
  bundle: true,
  outfile: "dist/hosti.js",
  mainFields: ["module", "main"],
  format: "iife",
  minify: true,
  logLevel: "error",
});
