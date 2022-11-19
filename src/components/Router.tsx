import React, {
  createContext,
  useContext,
  Fragment,
  useEffect,
  useState,
} from "react";
import { NavigationContext } from "../contexts/navigation";

export interface RouterProps {
  children: React.ReactNode;
}

export const Router: React.FC<RouterProps> = ({ children }) => {
  const { subscribe } = useContext(NavigationContext);

  const [key, setKey] = useState(0);

  useEffect(() => subscribe(() => setKey((key) => key + 1)), []);

  return <Fragment key={key}>{children}</Fragment>;
};
