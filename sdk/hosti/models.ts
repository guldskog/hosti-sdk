import { Navigation } from "./navigation";

export type Environment = "localhost" | "live";

export interface AppProps {
  node: HTMLElement;
  navigation: Navigation;
  environment: Environment;
}
export type App = (props: AppProps) => void;

export interface Manifest {
  version: string;
}
