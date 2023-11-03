import { MoviePropTypes } from "@/db";
import React from "react";
import MovieBox from "./common/MovieBox";

const MoviesContainer: React.FC<{ data: MoviePropTypes[] }> = ({ data }) => {
  return (
    <div className="grid w-full  place-items-center gap-4 lg:grid-cols-2 fadeShow1">
      {data.map((item) => {
        if (!item.top) {
          return (
            <MovieBox
              key={item.id}
              id={item.id}
              imageUrl={item.imageUrl}
              imdbScore={item.imdbScore}
              movieName={item.movieName}
              popularity={item.popularity}
              backgroundImageUrl={item.backgroundImageUrl}
              description={item.description}
            />
          );
        }
      })}
    </div>
  );
};
export default MoviesContainer;
