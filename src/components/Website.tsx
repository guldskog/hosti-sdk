import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Greeting } from "./Greeting";
import { Portfolio } from "./Portfolio";

export const Website = () => {
  return (
    <div className="overflow-hidden bg-dark-primary flex flex-col gap-16">
      <Greeting />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
};
