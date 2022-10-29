import { Navigation } from "./navigation";

export type Environment = "localhost" | "live";

export interface AppProps {
  node: HTMLElement;
  navigation: Navigation;
  environment: Environment;
}
export type App = (props: AppProps) => {
  version: string;
  destroy?: () => void;
};

export interface Manifest {
  id: string;
  name: string;
  version: string;
}

export interface Env {}

export const importDefault = async <T>(path: string): Promise<T> =>
  (await import(path)).default;
