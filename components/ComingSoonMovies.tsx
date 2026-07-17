import React from "react";
import { BsFire } from "react-icons/bs";
import { useTranslation } from "react-i18next";

interface ComingSoonMoviesProps {
  movies: { movieName: string; imageUrl: string }[];
}

const ComingSoonMovies: React.FC<ComingSoonMoviesProps> = ({ movies }) => {
  const { t } = useTranslation();
  return (
    <div className="hidden w-[40%] flex-col items-center justify-start gap-4 text-white lg:flex">
      <div className="flex w-full items-center justify-start gap-2 pr-4 text-xl fadeShow2">
        <div>
          <BsFire />
        </div>
        <p> {t("comingSoon")} </p>
      </div>
      <div className="flex w-full flex-col items-center justify-start gap-6 fadeShow1">
        {movies.map((item) => {
          return (
            <div
              key={item.movieName}
              className="glass glass-hover relative h-auto w-full overflow-hidden rounded-2xl transition-all duration-300"
            >
              <img className="w-full " src={item.imageUrl} alt="" />
              <div className="glass-strong absolute bottom-0 right-0 flex w-full items-center justify-between px-3 py-2">
                <p>{item.movieName}</p>
                <div className="glow-primary-sm animate-pulse rounded-md border border-primary/60 p-2 text-center text-sm text-white">
                  {t("comingSoon")}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ComingSoonMovies;
