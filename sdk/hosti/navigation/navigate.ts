import { buildUrl } from "./buildUrl";
import { current } from "./current";

export interface NavigateProps {
  appId?: string;
  params?: string[];
  query?: { [key: string]: string };
  hash?: string;
}

export type Navigate = (props: NavigateProps) => void;

export const navigate: Navigate = (props) => {
  const currentUrl = buildUrl(current());
  const newUrl = buildUrl(props);

  if (currentUrl === newUrl) return;

  if (props.appId) {
    location.href = `${location.origin}${newUrl}`;
    return;
  }

  history.pushState({}, "", newUrl);

  dispatchEvent(
    new CustomEvent("navigation", {
      detail: {
        ...props,
      },
    })
  );
};
