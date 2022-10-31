import { App } from "@hosti/models";
import ReactDOM from "react-dom/client";
import { Root } from "./components/Root";
import "./styles.css";

const app: App = ({ node }) => {
  const root = ReactDOM.createRoot(node);
  root.render(<Root />);
};

export default app;
