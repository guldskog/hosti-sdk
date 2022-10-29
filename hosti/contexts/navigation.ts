import React from "react";

import { Current } from "../navigation/current";
import { Navigate } from "../navigation/navigate";
import { Subscribe } from "../navigation/subscribe";

export const NavigationContext = React.createContext<{
  current?: Current;
  navigate?: Navigate;
  subscribe?: Subscribe;
}>({});
