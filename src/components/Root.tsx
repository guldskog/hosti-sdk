import React from "react";
import { Nav } from "./Nav";
import { Route } from "./Route";
import { Router } from "./Router";

export interface RootProps {}

export const Root: React.FC<RootProps> = () => {
  return (
    <Router>
      <Nav
        items={[
          { name: "Home", path: "home" },
          { name: "About", path: "about" },
          { name: "People", path: "people" },
        ]}
      />
      <Route path="home">Home</Route>
      <Route path="about">About</Route>
      <Route path="people">
        <Nav
          items={[
            { name: "Emelie", path: "emelie" },
            { name: "Joacim", path: "joacim" },
            { name: "Buddha", path: "buddha" },
            { name: "People", path: "people" },
          ]}
        />
        <Route path="emelie">{Math.random()}</Route>
        <Route path="joacim">{Math.random()}</Route>
        <Route path="buddha">{Math.random()}</Route>
        <Route path="people">
          <Nav
            items={[
              { name: "Emelie", path: "emelie" },
              { name: "Joacim", path: "joacim" },
              { name: "Buddha", path: "buddha" },
            ]}
          />
          <Route path="emelie">{Math.random()}</Route>
          <Route path="joacim">{Math.random()}</Route>
          <Route path="buddha">{Math.random()}</Route>
        </Route>
      </Route>
    </Router>
  );
};
