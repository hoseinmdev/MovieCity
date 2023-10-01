import React from "react";
import TopMovieLabel from "./TopMovieLabel";
import { BsHeartFill } from "react-icons/bs";
import { MoviePropTypes } from "@/db";
import Link from "next/link";

const TopMovieBox: React.FC<MoviePropTypes> = ({
  imageUrl,
  imdbScore,
  movieName,
  popularity,
  top,
  homePageImageUrl,
  id,
  // new
}) => {
  return (
    <Link
      href={`${id}`}
      className={`group/trackBox relative flex h-[11.5rem] w-full flex-col items-start justify-between gap-2 overflow-hidden text-sm dark:text-white lg:h-auto lg:w-auto lg:cursor-pointer lg:text-base`}
    >
      <img
        src={homePageImageUrl}
        className="h-[14rem] w-full rounded-lg bg-cover transition-all duration-300 group-hover/trackBox:blur-sm group-hover/trackBox:brightness-50"
        alt="Landscape pdicture"
      />
      <div
        className={`absolute  h-full flex-col items-start justify-center  p-4 pt-6 text-base text-white opacity-0 transition-all duration-300 group-hover/trackBox:opacity-100 lg:flex `}
      >
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <p>{"10 / " + imdbScore}</p>
            <div className="rounded-md text-[0.9rem] text-white/70">IMDB</div>
          </div>
          <div className="flex items-center justify-center gap-1 text-white/75">
            <p>{popularity + "%"}</p>
            <BsHeartFill />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 pt-4">
          <p>{movieName}</p>
          <span>{top && <TopMovieLabel />}</span>
        </div>
      </div>
    </Link>
  );
};
export default TopMovieBox;
