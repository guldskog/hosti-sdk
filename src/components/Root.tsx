import React from "react";

export interface RootProps {}

export const Root: React.FC<RootProps> = (props) => {
  return (
    <div className="grid place-items-center h-full w-full absolute">
      <h1>WELCOME TO JANNEJÖNNY</h1>
    </div>
  );
};
