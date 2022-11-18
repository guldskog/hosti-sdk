import React, { useEffect, useState } from "react";

export interface SeedProps {
  generation?: number;
}

export const Seed: React.FC<SeedProps> = ({ generation = 0 }) => {
  const [next, setNext] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNext(true);
    }, 100);
  }, []);

  let branch = "grow";

  if (generation % 4 === 0) branch = "split";

  return (
    next &&
    generation < 32 && (
      <div className={`absolute mt-2 w-0.5 h-1 bg-red-400 rounded`}>
        {branch === "split" && (
          <div style={{ transform: `rotate(${20}deg)` }}>
            <Seed generation={generation + 1} />
          </div>
        )}
        {branch === "grow" && (
          <div>
            <Seed generation={generation + 1} />
          </div>
        )}
        {branch === "split" && (
          <div style={{ transform: `rotate(-${20}deg)` }}>
            <Seed generation={generation + 1} />
          </div>
        )}
      </div>
    )
  );
};
