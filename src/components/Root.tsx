import React from "react";
import AppList from "./AppList";
import CardHeading from "./CardHeading";

export interface RootProps {}

export const Root: React.FC<RootProps> = (props) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <CardHeading />
        <AppList />
      </div>
    </div>
  );
};
