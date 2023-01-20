import React, {
  createContext,
  Fragment,
  useContext,
  useEffect,
  useState,
} from "react";
import { NavigationContext } from "../contexts/navigation";
import { useForceRerender } from "../hooks/useForceRerender";
import { useNavigation } from "../hooks/useNavigation";

export const RouteContext = createContext({
  parentRoutePaths: [] as string[],
});

export interface RouteProps {
  children: React.ReactNode;
  path: string;
}

export const Route: React.FC<RouteProps> = ({ path, children }) => {
  const { parentRoutePaths } = useContext(RouteContext);
  const { params } = useNavigation();

  const show =
    params.join("/") === [...parentRoutePaths, ...path.split("/")].join("/");

  if (!show) return null;

  return (
    <RouteContext.Provider
      value={{
        parentRoutePaths: [...parentRoutePaths, ...path.split("/")],
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};
