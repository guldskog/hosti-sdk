import { App } from "@hosti/models";
import "./styles.css";

const app: App = ({ node }) => {
  node.innerText = "Hello!";
};

export default app;
