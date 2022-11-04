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
        {apps.length === 0 ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          apps.map((app) => {
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
          })
        )}
      </ul>
    </div>
  );
};

export default AppList;
