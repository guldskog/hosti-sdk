import { useContext, useEffect } from "react";
import { NavigationContext } from "../contexts/navigation";
import { useForceRerender } from "../hooks/useForceRerender";
import { RouteContext } from "./Route";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export interface SidebarProps {
  items: { name: string; path: string }[];
}

export const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const { parentRoutePaths } = useContext(RouteContext);
  const { navigate, current, subscribe } = useContext(NavigationContext);

  const rerender = useForceRerender();

  useEffect(() => {
    return subscribe(({ params }) => {
      params.pop();
      if (params.join("/") === parentRoutePaths.join("/")) {
        rerender();
      }
    });
  }, []);

  return (
    <nav className="flex flex-col w-fit space-y-4 bg-white p-2">
      {items.map(({ name, path }) => {
        return (
          <button
            key={name}
            onClick={() => {
              navigate({
                params: [...parentRoutePaths, ...path.split("/")],
              });
            }}
            className={classNames(
              path === current().params[parentRoutePaths.length]
                ? "bg-gray-100 text-gray-700"
                : "text-gray-500 hover:text-gray-700",
              "px-3 py-2 font-medium text-sm rounded-md"
            )}
          >
            {name}
          </button>
        );
      })}
    </nav>
  );
};
