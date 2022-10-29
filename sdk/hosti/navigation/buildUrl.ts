import { current } from "./current";
import { NavigateProps } from "./navigate";

export const buildUrl = (props: NavigateProps) => {
  const appId = (appId: string) => {
    return appId && appId !== "home" ? `/@${appId}` : `/`;
  };

  const params = (params: string[]) => {
    if (params?.length) {
      return `/${params.join("/")}`;
    }

    return "";
  };

  const query = (query: { [key: string]: string }) => {
    const queryKeys = query && Object.keys(query);

    if (queryKeys?.length) {
      const formattedQueryParams = queryKeys.map(
        (key) => `${key}=${query[key]}`
      );

      return `?${formattedQueryParams.join("&")}`;
    }

    return "";
  };

  const hash = (hash: string) => {
    return hash ? `#${hash}` : "";
  };

  return [
    appId(props.appId || current().appId),
    params(props.params || []),
    query(props.query || {}),
    hash(props.hash || ""),
  ].join("");
};
