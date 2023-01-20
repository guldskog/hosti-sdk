import { useContext, useEffect, useState } from "react";
import { RouteContext } from "../components/Route";
import { NavigationContext } from "../contexts/navigation";

export const useNavigation = () => {
  const { parentRoutePaths } = useContext(RouteContext);
  const { current, subscribe } = useContext(NavigationContext);

  const [navigation, setNavigation] = useState(current());

  useEffect(() => {
    return subscribe((navigation) => {
      const params = [...navigation.params];

      params.pop();

      if (params.join("/") === parentRoutePaths.join("/")) {
        setNavigation(navigation);
      }
    });
  }, []);

  return navigation;
};
