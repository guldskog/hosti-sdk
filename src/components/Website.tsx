import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Greeting } from "./Greeting";
import { Portfolio } from "./Portfolio";

export const Website = () => {
  return (
    <div className="relative flex flex-col gap-16">
      <Greeting />
      <AboutMe />
      <Portfolio />
      <Contact />
      <div
        style={{
          background: `radial-gradient(800px circle at 125% 576px, rgba(174, 184, 202, 0.1), transparent 40%)`,
        }}
        className="absolute pointer-events-none inset-0"
      ></div>
    </div>
  );
};
