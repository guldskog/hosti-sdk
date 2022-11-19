import React, { createContext, useContext, useEffect, useState } from "react";
import { NavigationContext } from "../contexts/navigation";

export const RouteContext = createContext({
  parentRoutePaths: [] as string[],
});

export interface RouteProps {
  children: React.ReactNode;
  path: string;
}

export const Route: React.FC<RouteProps> = ({ path, children }) => {
  const { current } = useContext(NavigationContext);
  const { parentRoutePaths } = useContext(RouteContext);

  const params = current().params;

  params.length = parentRoutePaths.length + 1;

  const show =
    params.filter(Boolean).join("/") === [...parentRoutePaths, path].join("/");

  if (!show) return null;

  return (
    <RouteContext.Provider
      value={{
        parentRoutePaths: [...parentRoutePaths, path],
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};
