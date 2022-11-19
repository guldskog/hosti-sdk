import { useContext } from "react";
import { NavigationContext } from "../contexts/navigation";
import { RouteContext } from "./Route";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export interface NavProps {
  items: { name: string; path: string }[];
}

export const Nav: React.FC<NavProps> = ({ items }) => {
  const { parentRoutePaths } = useContext(RouteContext);
  const { navigate, current } = useContext(NavigationContext);

  return (
    <nav className="flex space-x-4 mb-2">
      {items.map((item) => {
        return (
          <button
            key={item.name}
            onClick={() =>
              navigate({
                params: [...parentRoutePaths, item.path],
              })
            }
            className={classNames(
              item.path === current().params[parentRoutePaths.length]
                ? "bg-gray-100 text-gray-700"
                : "text-gray-500 hover:text-gray-700",
              "px-3 py-2 font-medium text-sm rounded-md"
            )}
          >
            {item.name}
          </button>
        );
      })}
    </nav>
  );
};
