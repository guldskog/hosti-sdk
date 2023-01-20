import { Navigation } from "@hosti/navigation";
import { createContext, ReactNode, useContext } from "react";

const NavigationContext = createContext<Navigation>(null);

interface Props extends Navigation {
  children: ReactNode;
}

export const NavigationProvider = ({ children, ...navigation }: Props) => {
  return (
    <NavigationContext.Provider value={navigation}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const navigation = useContext(NavigationContext);

  if (!navigation) {
    throw new Error(
      "Navigation context is not available. Make sure you have a NavigationProvider in your component tree."
    );
  }

  return navigation;
};
