import { App } from "@hosti/models";
import ReactDOM from "react-dom/client";
import { Root } from "./components/Root";
import { version } from "./manifest.json";
import "./styles.css";

const app: App = ({ node }) => {
  const root = ReactDOM.createRoot(node);

  root.render(<Root />);

  return {
    version,
    destroy: () => {
      root.unmount();
    },
  };
};

export default app;
