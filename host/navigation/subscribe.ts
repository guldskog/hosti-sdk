import { current } from "./current";
import { Navigate } from "./navigate";

export type Subscribe = (callback: Navigate) => () => void;

export const subscribe: Subscribe = (callback) => {
  const func = () => {
    callback(current());
  };

  addEventListener("popstate", func);
  addEventListener("navigation", func);
  return () => {
    removeEventListener("popstate", func);
    removeEventListener("navigation", func);
  };
};
