import { useCallback, useState } from "react";

export const useForceRerender = () => {
  const [, setTick] = useState(0);
  return useCallback(() => setTick((tick) => tick + 1), []);
};
