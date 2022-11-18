const chokidar = require("chokidar");
const { exec } = require("child_process");
const esbuild = require("esbuild");
const browserSync = require("browser-sync");
const SocketServer = require("ws").Server;
const postCssPlugin = require("esbuild-style-plugin");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 4003;

const getCurrentBranchName = "git rev-parse --abbrev-ref HEAD";

app.get("/appId", (req, res) => {
  exec(getCurrentBranchName, (err, stdout) => {
    const branchName = stdout.trim();
    const appId = branchName.replace("apps/", "");
    res.send(appId);
  });
});

app.listen(port);

exec(getCurrentBranchName, (err, stdout) => {
  if (!stdout.trim().startsWith("apps/")) {
    throw new Error('Branch out "apps/{appId}" then try again!');
  }

  const branchName = stdout.trim();
  const appId = branchName.replace("apps/", "");

  esbuild
    .serve(
      {
        host: "localhost",
        port: 4001,
      },
      {
        entryPoints: {
          app: "src/app.tsx",
          manifest: "src/manifest.json",
          hosti: "sdk/hosti/index.ts",
        },
        bundle: true,
        mainFields: ["module", "main"],
        format: "esm",
        loader: {
          ".png": "file",
          ".jpg": "file",
          ".jpeg": "file",
          ".svg": "file",
          ".gif": "file",
        },
        publicPath: "http://localhost:4001/",
        plugins: [
          postCssPlugin({
            postcss: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          }),
        ],
        logLevel: "error",
      }
    )
    .then(() => {
      browserSync.create().init({
        ghostMode: false,
        ui: false,
        https: true,
        port: 4000,
        startPath: `/${appId && appId !== "home" ? `@${appId}` : ""}`,
        notify: false,
        open: process.argv[2] === "open",
        server: "./public",
        single: true,
      });

      const wss = new SocketServer({ port: 4002 });

      wss.on("connection", (ws) => {
        const watcher = chokidar.watch(["./src/**", "./sdk/hosti/**"], {
          ignored: /^\./,
          persistent: true,
        });

        watcher.on("change", (path) => {
          if (ws.readyState === 1) {
            ws.send("reload");
          }
        });
      });
    });
});
