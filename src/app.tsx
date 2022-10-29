import { NavigationContext } from "@hosti/contexts/navigation";
import { App } from "@hosti/models";
import ReactDOM from "react-dom/client";
import { Root } from "./components/Root";
import "./styles.css";

const app: App = ({ node, navigation }) => {
  const root = ReactDOM.createRoot(node);

  root.render(
    <NavigationContext.Provider value={{ ...navigation }}>
      <Root />
    </NavigationContext.Provider>
  );
};

export default app;
