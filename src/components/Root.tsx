import { Experience } from "./Experience";
import { Header } from "./Header";
import { Website } from "./Website";
import Emil from "../assets/Emil.png";

export const Root = () => {
  return (
    <main className="overflow-x-hidden">
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

      <div className="md:hidden">
        <Header />
        <div className="w-screen h-screen"></div>
        <div className="absolute w-screen h-screen inset-0">
          <Experience />
        </div>
        <Website />

        <svg
          viewBox="0 0 900 600"
          className="h-[100vh] absolute left-[40vw] top-[92vh] scale-[0.8] filter blur-3xl opacity-10"
        >
          <path
            d="M326.9 -86C370.9 29.5 317.7 196.8 241.5 227.3C165.3 257.9 66.1 151.7 4.1 85.2C-57.9 18.7 -82.7 -8.1 -77.2 -70.5C-71.6 -132.9 -35.8 -231 52.8 -248.1C141.4 -265.3 282.8 -201.5 326.9 -86"
            className="fill-primary"
          ></path>
        </svg>

        <svg
          viewBox="0 0 900 600"
          className="h-[100vh] absolute -translate-x-1/2 -translate-y-1/2 left-3/4 top-[365vh] filter blur-3xl opacity-10"
        >
          <path
            d="M326.9 -86C370.9 29.5 317.7 196.8 241.5 227.3C165.3 257.9 66.1 151.7 4.1 85.2C-57.9 18.7 -82.7 -8.1 -77.2 -70.5C-71.6 -132.9 -35.8 -231 52.8 -248.1C141.4 -265.3 282.8 -201.5 326.9 -86"
            className="fill-secondary"
          ></path>
        </svg>
      </div>
    </main>
  );
};
