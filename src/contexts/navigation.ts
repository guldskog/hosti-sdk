import React from "react";

import { Current } from "../../host/navigation/current";
import { Navigate } from "../../host/navigation/navigate";
import { Subscribe } from "../../host/navigation/subscribe";

export const NavigationContext = React.createContext<{
  current?: Current;
  navigate?: Navigate;
  subscribe?: Subscribe;
}>({});
