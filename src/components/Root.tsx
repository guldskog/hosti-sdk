import React, { useContext, useEffect, useState } from "react";
import { NavigationContext } from "../contexts/navigation";
import { Nav } from "./Nav";

export interface RootProps {}

export const Root: React.FC<RootProps> = (props) => {
  const { current, subscribe } = useContext(NavigationContext);

  const [level1, setLevel1] = useState(current().params[0]);
  const [level2, setLevel2] = useState(current().params[1]);
  const [level3, setLevel3] = useState(current().params[2]);

  useEffect(() => {
    const unsubscribe = subscribe(({ params }) => {
      setLevel1(params[0]);
      setLevel2(params[1]);
      setLevel3(params[2]);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="text-center">
      <Nav level={1} />
      {level1 === "a" && (
        <>
          <Nav level={2} />
          {level2 === "a" && (
            <>
              <Nav level={3} />
              {level3 === "a" && <article>A</article>}
              {level3 === "b" && <article>B</article>}
              {level3 === "c" && <article>C</article>}
              {level3 === "d" && <article>D</article>}
            </>
          )}
          {level2 === "b" && <article>B</article>}
          {level2 === "c" && <article>C</article>}
          {level2 === "d" && <article>D</article>}
        </>
      )}
      {level1 === "b" && <article>B</article>}
      {level1 === "c" && <article>C</article>}
      {level1 === "d" && <article>D</article>}
    </div>
  );
};
