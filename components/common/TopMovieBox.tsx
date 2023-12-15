import React, { useState } from "react";
import TopMovieLabel from "./TopMovieLabel";
import { BsHeartFill } from "react-icons/bs";
import { MoviePropTypes } from "@/db";
import Link from "next/link";
import Image from "next/image";
import { AiOutlinePlayCircle } from "react-icons/ai";
import i18n from "@/i18n";

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
  const [clicked, setClicked] = useState(false);
  return (
    <Link
      href={`${id}`}
      onClick={() => setClicked(true)}
      className={`fadeShow1 group/trackBox relative flex h-[14.5rem] w-full flex-col items-start justify-between gap-2 overflow-hidden text-sm dark:text-white lg:h-auto lg:w-auto lg:cursor-pointer lg:text-base`}
    >
      <Image
        src={homePageImageUrl || ""}
        placeholder="blur"
        loading="lazy"
        blurDataURL={id}
        width={400}
        height={400}
        className={`h-[14rem] w-full max-w-[23rem] rounded-lg bg-cover transition-all duration-300 group-hover/trackBox:blur-sm group-hover/trackBox:brightness-50 ${
          clicked ? "blur-sm" : ""
        }`}
        alt="Landscape pdicture"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 mb-auto ml-auto mr-auto mt-auto flex h-24 w-24 items-center justify-center group-hover/trackBox:opacity-0">
        <img
          src={homePageImageUrl}
          className="relative h-full  w-full opacity-40 blur-xl"
        ></img>
        <div className="absolute text-4xl">
          <AiOutlinePlayCircle />
        </div>
        <div className="absolute animate-ping text-4xl">
          <AiOutlinePlayCircle />
        </div>
      </div>
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
      <p dir={i18n.dir()} className="font-EstedadFont opacity-70 text-start w-full">{"- " + movieName}</p>
    </Link>
  );
};
export default TopMovieBox;
