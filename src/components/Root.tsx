import React from "react";
import AppList from "./AppList";
import CardHeading from "./CardHeading";

export interface RootProps {}

export const Root: React.FC<RootProps> = (props) => {
  return <AppList />;
};
