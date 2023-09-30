import React from "react";
import AppList from "./AppList";

export interface RootProps {}

export const Root: React.FC<RootProps> = (props) => {
  return <AppList />;
};
