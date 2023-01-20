import React from "react";
import { Movies } from "../pages/Movies";
import { Nav } from "./Nav";
import { Route } from "./Route";

export interface RootProps {}

export const Root: React.FC<RootProps> = () => {
  return (
    <>
      <div className="p-2 bg-gray-200">
        <Nav
          items={[
            { name: "Home", path: "home" },
            { name: "About", path: "about" },
            { name: "Movies", path: "movies" },
          ]}
        />
        <Movies />
      </div>
    </>
  );
};
