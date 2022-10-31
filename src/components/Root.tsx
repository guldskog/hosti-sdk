import React from "react";

export interface RootProps {}

export const Root: React.FC<RootProps> = (props) => {
  return (
    <div className="grid place-items-center h-full w-full absolute">
      <div className="text-2xl text-center">My App</div>
    </div>
  );
};
