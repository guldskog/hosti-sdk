import { App, importDefault, Manifest } from "./models";
import navigation from "./navigation";
import "./styles.css";

(async () => {
  const node = document.createElement("div");
  document.body.appendChild(node);

  const socket = new WebSocket("ws://localhost:4002");
  const localhost = "http://localhost:4001";

  const manifest = await importDefault<Manifest>(
    `${localhost}/manifest.js?${Date.now()}`
  );

  document.title = `${manifest.id}.${manifest.version}`;

  let destroyApp;
  let version;

  const mountApp = async () => {
    const currentVersion = Date.now();
    version = currentVersion;
    if (destroyApp) {
      destroyApp();
      destroyApp = undefined;
    }

    const appId = location.pathname.slice(1).split("/")[0];

    if (appId !== manifest.id) return;

    const app = await importDefault<App>(`${localhost}/app.js?${Date.now()}`);
    if (currentVersion !== version) return;

    const styles = document.createElement("link");
    styles.href = `${localhost}/app.css?${Date.now()}`;
    styles.type = "text/css";
    styles.rel = "stylesheet";
    styles.id = "app-styles";
    document.getElementsByTagName("head")[0].appendChild(styles);

    const { destroy } = app({
      node,
      navigation,
      environment: "localhost",
    });

    destroyApp = () => {
      if (destroy) destroy();
      document.getElementById(styles.id)?.remove();
      node.innerHTML = "";
    };
  };

  socket.onmessage = ({ data }) => {
    if (data === "reload") {
      location.reload();
    }

    if (data === "reload.app") {
      mountApp();
    }
  };

  mountApp();
})();
