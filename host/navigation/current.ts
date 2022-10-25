import { NavigateProps } from "./navigate";

export type Current = () => NavigateProps;

export const current: Current = () => {
  const params = location.pathname.slice(1).split("/");
  params.shift();

  const query = location.search
    .slice(1)
    .split("&")
    .reduce((acc, queryParam) => {
      const [key, value] = queryParam.split("=");
      if (key) return { ...acc, [key]: value };
      return { ...acc };
    }, {});

  const hash = location.hash.slice(1);

  return { params, query, hash };
};
