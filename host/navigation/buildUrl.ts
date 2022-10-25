import { NavigateProps } from "./navigate";

export const buildUrl = (props: NavigateProps) => {
  const stringifyParams = (params: string[]) => {
    if (params?.length) {
      return `/${params.join("/")}`;
    }

    return "";
  };

  const stringifyQuery = (query: { [key: string]: string }) => {
    const queryKeys = query && Object.keys(query);

    if (queryKeys?.length) {
      const formattedQueryParams = queryKeys.map(
        (key) => `${key}=${query[key]}`
      );

      return `?${formattedQueryParams.join("&")}`;
    }

    return "";
  };

  const stringifyHash = (hash: string) => {
    return hash ? `#${hash}` : "";
  };

  const appId = `/${location.pathname.slice(1).split("/")[0]}`;
  const params = stringifyParams(props.params || []);
  const query = stringifyQuery(props.query || {});
  const hash = stringifyHash(props.hash || "");

  return `${appId}${params}${query}${hash}`;
};
