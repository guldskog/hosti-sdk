import React from "react";

export interface RootProps {}

export const Root: React.FC<RootProps> = (props) => {
  return (
    <section className="w-screen h-screen grid place-items-center bg-neutral-900">
      <h1 className="text-8xl text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 font-bold to-pink-600 hover:rotate-[360deg] transition duration-100">
        DEMO
      </h1>
    </section>
  );
};
