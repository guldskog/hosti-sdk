import React from "react";

import { Current } from "@hosti/navigation/current";
import { Navigate } from "@hosti/navigation/navigate";
import { Subscribe } from "@hosti/navigation/subscribe";

export const NavigationContext = React.createContext<{
  current?: Current;
  navigate?: Navigate;
  subscribe?: Subscribe;
}>({});
