import { NavigateProps } from "./navigate";

export type Current = () => NavigateProps;

export const current: Current = () => {
  const pathname = location.pathname.slice(1);
  const params = !!pathname ? pathname.split("/") : [];

  const appId = params[0]?.includes("@") ? params.shift().substring(1) : "home";

  const query = location.search
    .slice(1)
    .split("&")
    .reduce((acc, queryParam) => {
      const [key, value] = queryParam.split("=");
      if (key) return { ...acc, [key]: value };
      return { ...acc };
    }, {});

  const hash = location.hash.slice(1);

  return { appId, params, query, hash };
};
