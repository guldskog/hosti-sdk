import { Experience } from "./Experience";
import { Header } from "./Header";
import { Website } from "./Website";
import Emil from "../assets/Emil.png";

export const Root = () => {
  return (
    <main className="overflow-x-hidden max-w-full">
      <div className="fixed hidden md:grid inset-0 bg-dark-primary place-items-center">
        <div className="flex shadow-lg max-w-3xl bg-dark-secondary gap-8 p-16 rounded-lg">
          <img src={Emil} className="w-32 h-32 rounded-full" />
          <div>
            <h1 className="text-2xl w-fit">
              <span className="bg-gradient-to-tr font-bold from-secondary to-primary bg-clip-text text-transparent">
                Hi there!
              </span>{" "}
              <span className="text-white">👋</span>
            </h1>
            <p className="text-lg">
              This version of the site is currently under construction. Please
              visit the site from a mobile device! 🚧
            </p>
          </div>
        </div>
      </div>

      <div className="md:hidden relative">
        <Header />
        <div className="w-full h-[780px]"></div>
        <div className="absolute w-[360px] h-[780px] left-1/2 -translate-x-1/2 p-8 inset-0">
          <Experience />
        </div>
        <Website />

        <div
          style={{
            background: `radial-gradient(1600px circle at -25% 920px, rgba(174, 184, 202, 0.1), transparent 40%)`,
          }}
          className="absolute inset-0 pointer-events-none"
        ></div>
      </div>
    </main>
  );
};
