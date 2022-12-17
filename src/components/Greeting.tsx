import Emil from "../assets/Emil.png";

export const Greeting = () => {
  return (
    <div className="flex flex-col relative gap-4 p-8">
      <img
        src={Emil}
        className="mx-auto rounded-full w-32 h-32 flex-shrink-0"
      />

      <h1 className="text-2xl font-bold text-center">
        <span className="bg-gradient-to-tr from-secondary to-primary bg-clip-text text-transparent">
          Goddagens!
        </span>{" "}
        <span className="waving-hand text-white">👋</span>
      </h1>
      <p className="text-lg">
        ... or maybe I should stick to English? Yeah, that's probably a better
        idea! Good day! 🤪
      </p>
      <p className="text-lg">Lovely to see you here!</p>
      <p className="text-lg">
        I'm{" "}
        <span className="bg-gradient-to-tr from-secondary to-primary bg-clip-text text-transparent font-bold">
          Emil Kallioniemi
        </span>{" "}
        and I have the luck to be living one of my dreams as a web developer!
      </p>
    </div>
  );
};
