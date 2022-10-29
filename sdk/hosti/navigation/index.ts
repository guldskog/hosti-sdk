import { current, Current } from "./current";
import { navigate, Navigate } from "./navigate";
import { subscribe, Subscribe } from "./subscribe";

export interface Navigation {
  current: Current;
  navigate: Navigate;
  subscribe: Subscribe;
}

export default {
  current,
  navigate,
  subscribe,
};
