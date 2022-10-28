import { App, importDefault, Manifest } from "./models";
import navigation from "./navigation";
import "./styles.css";

const node = document.createElement("div");
document.body.appendChild(node);

const socket = new WebSocket("ws://localhost:4002");
const localhost = "http://localhost:4001";

(async () => {
  const manifest = await importDefault<Manifest>(`${localhost}/manifest.js`);

  document.title = `${manifest.id}.${manifest.version}`;

  const loadStyles = (): Promise<HTMLLinkElement> =>
    new Promise((resolve) => {
      const styles = document.createElement("link");
      styles.onload = () => {
        resolve(styles);
      };
      styles.href = `${localhost}/app.css`;
      styles.type = "text/css";
      styles.rel = "stylesheet";
      styles.id = "app-styles";
      document.getElementsByTagName("head")[0].appendChild(styles);
    });

  await loadStyles();
  const app = await importDefault<App>(`${localhost}/app.js`);

  app({
    node,
    navigation,
    environment: "localhost",
  });

  socket.onmessage = ({ data }) => {
    if (data === "reload") location.reload();
  };
})();
