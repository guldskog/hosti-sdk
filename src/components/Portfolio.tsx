import PortfolioImage from "../assets/Portfolio.jpg";

const work = [
  {
    id: 1,
    title: "My Portfolio",
    description: "The website you're looking at right now.",
    image: PortfolioImage,
  },
];

export const Portfolio = () => {
  return (
    <section className="flex flex-col gap-4 p-8">
      <h1 className="text-center text-2xl w-fit bg-gradient-to-tr font-bold from-secondary to-primary bg-clip-text text-transparent">
        Some of my work
      </h1>
      <div className="grid grid-cols-1">
        {work.map((work) => {
          return (
            <div
              key={work.id}
              className="overflow-hidden shadow-sm flex flex-col z-50 gap-4 bg-dark-secondary p-8 rounded-lg"
            >
              <img src={work.image} className="rounded-lg" />
              <h2 className="text-xl bg-gradient-to-tr from-secondary to-primary text-transparent font-bold bg-clip-text">
                {work.title}
              </h2>
              <p className="text-lg">{work.description}</p>
              <button className="w-fit bg-gradient-to-tr from-secondary to-primary glow rounded-lg px-6 py-2">
                Visit
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
