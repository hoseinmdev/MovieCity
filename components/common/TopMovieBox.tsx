import React, { useState } from "react";
import TopMovieLabel from "./TopMovieLabel";
import { BsHeartFill } from "react-icons/bs";
import { MoviePropTypes } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { AiOutlinePlayCircle } from "react-icons/ai";
import i18n from "@/i18n";

const BLUR_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

const TopMovieBox: React.FC<MoviePropTypes> = ({
  imageUrl,
  imdbScore,
  movieName,
  popularity,
  top,
  homePageImageUrl,
  _id,
}) => {
  const [clicked, setClicked] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      href={`${_id}`}
      onClick={() => setClicked(true)}
      className={`glass glass-hover fadeShow1 group/trackBox relative flex h-[14.5rem] w-full flex-col items-start justify-between gap-2 overflow-hidden rounded-2xl text-sm transition-all duration-300 hover:shadow-[0_8px_32px_rgba(124,58,237,0.18)] dark:text-white lg:h-auto lg:w-auto lg:cursor-pointer lg:text-base`}
    >
      {!loaded && (
        <div className="glass absolute inset-0 z-10 h-[14rem] animate-pulse rounded-2xl" />
      )}
      <Image
        src={homePageImageUrl || imageUrl}
        width={400}
        height={400}
        placeholder="blur"
        blurDataURL={BLUR_URL}
        onLoad={() => setLoaded(true)}
        className={`h-[14rem] w-full max-w-[23rem] rounded-2xl bg-cover transition-all duration-500 group-hover/trackBox:blur-sm group-hover/trackBox:brightness-50 ${
          clicked ? "blur-sm" : ""
        } ${loaded ? "opacity-100" : "opacity-0"}`}
        alt={movieName}
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 mb-auto ml-auto mr-auto mt-auto flex h-24 w-24 items-center justify-center group-hover/trackBox:opacity-0">
        <Image
          width={50}
          height={50}
          alt=""
          src={homePageImageUrl || imageUrl}
          className="relative h-full w-full opacity-40 blur-xl"
        />
        <div className="absolute text-4xl text-primary drop-shadow-[0_0_10px_rgba(124,58,237,0.7)]">
          <AiOutlinePlayCircle />
        </div>
        <div className="absolute animate-ping text-4xl text-primary">
          <AiOutlinePlayCircle />
        </div>
      </div>
      <div
        className={`absolute h-full flex-col items-start justify-center p-4 pt-6 text-base text-white opacity-0 transition-all duration-300 group-hover/trackBox:opacity-100 lg:flex`}
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
      <p
        dir={i18n.dir()}
        className="w-full px-1 pb-1 text-start font-EstedadFont text-white/80"
      >
        {movieName}
      </p>
    </Link>
  );
};
export default TopMovieBox;
