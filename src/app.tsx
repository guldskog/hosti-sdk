import { NavigationContext } from "./contexts/navigation";
import { App } from "@hosti/models";
import ReactDOM from "react-dom/client";
import { Root } from "./components/Root";
import "./styles.css";
import { StrictMode } from "react";

const app: App = ({ node, navigation }) => {
  const root = ReactDOM.createRoot(node);

  root.render(
    <StrictMode>
      <NavigationContext.Provider value={{ ...navigation }}>
        <div>
          <Root />
        </div>
      </NavigationContext.Provider>
    </StrictMode>
  );
};

export default app;
