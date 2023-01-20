import { navigate } from "@hosti/navigation/navigate";
import React from "react";
import { Route, RouteContext } from "../components/Route";
import { Sidebar } from "../components/Sidebar";

export const Movie: React.FC<{
  movie: { id: string; name: string; genre: string };
}> = ({ movie: { id, name } }) => {
  const { parentRoutePaths } = React.useContext(RouteContext);

  return (
    <div className="bg-red-500 p-2 rounded">
      <button
        onClick={() =>
          navigate({
            params: [...parentRoutePaths, id],
          })
        }
      >
        {name}
      </button>
    </div>
  );
};

export const Movies: React.FC = () => {
  const movies = [
    {
      id: "the-shawshank-redemption",
      name: "The Shawshank Redemption",
      genre: "action",
    },
    {
      id: "the-godfather",
      name: "The Godfather",
      genre: "horror",
    },
    {
      id: "the-godfather-ii",
      name: "The Godfather: Part II",
      genre: "comedy",
    },
    {
      id: "the-godfather-iii",
      name: "The Godfather: Part III",
      genre: "comedy",
    },
  ];

  return (
    <Route path="movies">
      <div className="flex">
        <Sidebar
          items={[
            {
              name: "All genres",
              path: "all-genres",
            },
            {
              name: "Action",
              path: "action",
            },
            {
              name: "Horror",
              path: "horror",
            },
            {
              name: "Comedy",
              path: "comedy",
            },
          ]}
        />
        <div>
          {[...new Set(movies.map(({ genre }) => genre))].map((genre) => (
            <Route key={genre} path={genre}>
              {movies
                .filter((movie) => movie.genre === genre)
                .map((movie) => (
                  <Movie key={movie.id} movie={movie} />
                ))}
            </Route>
          ))}
        </div>
      </div>
    </Route>
  );
};
