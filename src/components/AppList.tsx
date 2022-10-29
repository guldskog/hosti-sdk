import { NavigationContext } from "@hosti/contexts/navigation";
import React from "react";

export interface AppListProps {}

export const AppList: React.FC<AppListProps> = (props) => {
  const navigation = React.useContext(NavigationContext);

  return (
    <div className="mt-6 flow-root px-6">
      <ul role="list" className="-my-5 divide-y divide-gray-200">
        <li className="py-4">
          <div className="flex items-center space-x-4">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900">
                To-Do List
              </p>
              <p className="truncate text-sm text-gray-500">@joacimguldskog</p>
            </div>
            <div>
              <button
                onClick={() => navigation.navigate({ appId: "to-do" })}
                className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
              >
                Open app
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AppList;
