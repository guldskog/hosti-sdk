import { NavigationContext } from "@host/contexts/navigation";
import React from "react";

export interface RootProps {}

export const Root: React.FC<RootProps> = (props) => {
  const navigation = React.useContext(NavigationContext);

  return (
    <div className="absolute w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="grid grid-cols-7 gap-20 py-40 px-10 max-w-7xl mx-auto">
        <a href="/app-store">
          <button className="w-full aspect-square bg-blue-500 rounded-2xl shadow-lg"></button>
          <div className="overflow-hidden whitespace-nowrap text-ellipsis text-white drop-shadow text-sm text-center">
            App Store
          </div>
        </a>
      </div>
    </div>
  );
};
