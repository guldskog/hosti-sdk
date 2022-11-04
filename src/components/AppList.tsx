import { NavigationContext } from "@hosti/contexts/navigation";
import React, { useEffect } from "react";

export interface AppListProps {}

interface App {
  id: string;
  name: string;
  author: Author;
}

interface Author {
  name: string;
  avatarUrl: string;
  htmlUrl: string;
}

export const AppList: React.FC<AppListProps> = (props) => {
  const navigation = React.useContext(NavigationContext);

  const [apps, setApps] = React.useState<App[]>([]);

  useEffect(() => {
    const fetchBranches = async () => {
      return await fetch(
        "https://api.github.com/repos/guldskog/hosti-sdk/branches"
      )
        .then((response) => response.json())
        .then((data) => data);
    };

    (async () => {
      const branches = await fetchBranches();
      const appsBranches = branches.filter(
        (branch) => branch.name.includes("app") && branch.name !== "apps/home"
      );

      const apps: App[] = [];

      for (const appBranch of appsBranches) {
        const branch = await fetch(
          `https://api.github.com/repos/guldskog/hosti-sdk/branches/${appBranch.name}`
        ).then((response) => response.json());

        apps.push({
          id: appBranch.name,
          name: appBranch.name,
          author: {
            name: branch.commit.author.login,
            avatarUrl: branch.commit.author.avatar_url,
            htmlUrl: branch.commit.author.html_url,
          },
        });
      }

      setApps(apps);
    })();
  }, []);

  return (
    <div className="mt-6 flow-root px-6">
      <ul role="list" className="-my-5 divide-y divide-gray-200">
        {apps.map((app) => {
          const appId = app.name.replace("apps/", "");

          return (
            <li
              key={app.id}
              className="p-4 hover:bg-indigo-50 transition duration-100"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={app.author.avatarUrl}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">
                    {appId}
                  </p>
                  <a
                    href={app.author.htmlUrl}
                    className="truncate text-sm text-gray-500"
                  >
                    @{app.author.name}
                  </a>
                </div>
                <div>
                  <button
                    onClick={() => navigation.navigate({ appId: appId })}
                    className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                  >
                    View
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AppList;
