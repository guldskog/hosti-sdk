import { App, Environment, Manifest } from "./models";
import navigation from "./navigation";

const node = document.createElement("div");
node.id = "app";
document.body.appendChild(node);

const isLocalhost = location.hostname === "localhost";
const environment: Environment = isLocalhost ? "localhost" : "live";

const importDefault = async <T>(path: string): Promise<T> =>
  (await import(path)).default;

const loadStyles = (
  path: string,
  manifest?: Manifest
): Promise<HTMLLinkElement> =>
  new Promise((resolve) => {
    const styles = document.createElement("link");
    styles.onload = () => {
      resolve(styles);
    };
    styles.href = `${path}/app.css${manifest ? `?${manifest.version}` : ""}`;
    styles.type = "text/css";
    styles.rel = "stylesheet";
    styles.id = "app-styles";
    document.getElementsByTagName("head")[0].appendChild(styles);
  });

const loadApp = async (path: string, manifest?: Manifest) => {
  await loadStyles(path, manifest);
  const app = await importDefault<App>(
    `${path}/app.js${manifest ? `?${manifest.version}` : ""}`
  );

  app({
    node,
    navigation,
    environment,
  });
};

(async () => {
  if (isLocalhost) {
    new WebSocket("ws://localhost:4002").onmessage = ({ data }) => {
      if (data === "reload") location.reload();
    };

    const response = await fetch(`http://localhost:4003/appId`);
    const appId = await response.text();

    if (appId !== navigation.current().appId) {
      navigation.navigate({
        ...navigation.current(),
        appId,
      });
      return;
    }

    loadApp("http://localhost:4001");
  } else {
    addEventListener("keyup", ({ key }) => {
      if (key === "Escape") {
        location.href = "https://hosti.app/";
      }
    });

    const appPath = `https://hosti.app/apps/${navigation.current().appId}`;

    const response = await fetch(`${appPath}/manifest.json`);
    const manifest = (await response.json()) as Manifest;

    loadApp(appPath, manifest);
  }
})();
