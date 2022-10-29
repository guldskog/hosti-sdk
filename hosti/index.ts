import { App, Environment, importDefault, Manifest } from "./models";
import navigation from "./navigation";
import { current } from "./navigation/current";

const node = document.createElement("div");
document.body.appendChild(node);

const isLocalhost = location.hostname === "localhost";
const environment: Environment = isLocalhost ? "localhost" : "live";

const loadApp = async (path: string, manifest?: Manifest) => {
  const loadStyles = (): Promise<HTMLLinkElement> =>
    new Promise((resolve) => {
      const styles = document.createElement("link");
      styles.onload = () => {
        resolve(styles);
      };
      styles.href = `${path}/app.css${manifest && `?${manifest.id}`}`;
      styles.type = "text/css";
      styles.rel = "stylesheet";
      styles.id = "app-styles";
      document.getElementsByTagName("head")[0].appendChild(styles);
    });

  await loadStyles();
  const app = await importDefault<App>(
    `${path}/app.js?${manifest && `?${manifest.id}`}`
  );

  app({
    node,
    navigation,
    environment,
  });
};

if (isLocalhost) {
  new WebSocket("ws://localhost:4002").onmessage = ({ data }) => {
    if (data === "reload") location.reload();
  };

  (async () => {
    const manifest = await importDefault<Manifest>(
      `http://localhost:4001/manifest.js`
    );

    if (manifest.id !== navigation.current().appId) {
      navigation.navigate({
        ...navigation.current(),
        appId: manifest.id,
      });
      location.reload();
      return;
    }

    loadApp("http://localhost:4001");
  })();
} else {
  const appPath = `https://hosti.app/apps/${current().appId}`;

  const response = await fetch(`${appPath}/manifest.json`);
  const manifest = (await response.json()) as Manifest;

  loadApp(appPath, manifest);
}
