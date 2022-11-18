import { useContext } from "react";
import { NavigationContext } from "../contexts/navigation";

const tabs = [
  { name: "A", href: "a" },
  { name: "B", href: "b" },
  { name: "C", href: "c" },
  { name: "D", href: "d" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Nav = ({ level = 1 }: { level?: number }) => {
  const { navigate, current } = useContext(NavigationContext);

  return (
    <nav className="flex space-x-4 mb-2" aria-label="Tabs">
      {tabs.map((tab) => {
        const params = current().params;

        params[level - 1] = tab.href;

        params.length = level;

        return (
          <button
            key={tab.name}
            onClick={() =>
              navigate({
                appId: current().appId,
                params: [...params],
              })
            }
            className={classNames(
              tab.href === current().params[level - 1]
                ? "bg-gray-100 text-gray-700"
                : "text-gray-500 hover:text-gray-700",
              "px-3 py-2 font-medium text-sm rounded-md"
            )}
          >
            {tab.name}
          </button>
        );
      })}
    </nav>
  );
};
