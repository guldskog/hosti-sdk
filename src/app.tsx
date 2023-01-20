import { App } from "@hosti/models";
import { createRoot } from "react-dom/client";
import { Root } from "./components/Root";
import { NavigationProvider } from "./providers/navigation";
import "./styles.css";

const app: App = ({ node, navigation }) => {
  createRoot(node).render(
    <NavigationProvider {...navigation}>
      <Root />
    </NavigationProvider>
  );
};

export default app;
