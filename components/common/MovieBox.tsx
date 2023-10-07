import { MoviePropTypes } from "@/db";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

const MovieBox: React.FC<MoviePropTypes> = ({
  id,
  imageUrl,
  imdbScore,
  movieName,
  popularity,
  top,
  description,
  backgroundImageUrl,
}) => {
  const { t } = useTranslation();

  return (
    <div className="relative flex min-h-[29rem] w-full flex-col items-center justify-between overflow-hidden  rounded-xl bg-gray-800 brightness-90 lg:w-[100%]">
      <Link
        href={`${id}`}
        className="relative min-h-[12rem] w-full bg-cover transition duration-300 lg:min-h-[12rem] lg:hover:opacity-70 "
        style={{
          backgroundImage: "url(" + `${backgroundImageUrl}` + ")",
        }}
      >
        <div className="absolute top-[10rem] z-10 h-20 w-full scale-150 bg-gray-800 blur-md lg:scale-110"></div>
        <img
          className="absolute right-2 top-6 lg:top-2 z-10 w-[6rem] rounded-xl shadow-xl lg:w-[20%]"
          src={imageUrl}
          alt=""
        />
      </Link>
      <div className="z-10 flex h-full w-full flex-col items-start justify-center gap-2 p-4 text-white">
        <p>{t(movieName)}</p>
        <p className="min-h-[5rem] text-sm text-white/80">
          {t(description || "")}
        </p>
        <div className="flex items-center justify-center gap-2 pt-4">
          <div className="flex flex-col items-center justify-center gap-1 text-white">
            <div className="rounded-lg bg-red-500 px-2 py-1 text-2xl">
              <AiFillHeart />
            </div>
            <p className="text-sm text-red-500">{popularity + "%"}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 text-white">
            <div className="rounded-lg bg-yellow-500 px-2 py-1 text-2xl">
              <AiFillStar />
            </div>
            <p className="text-sm text-yellow-500">{"10 / " + imdbScore}</p>
          </div>
        </div>
        <Link
          href={`${id}`}
          className="w-full rounded-lg bg-red-500 p-2 text-sm text-white transition-all duration-300 hover:bg-red-600 lg:text-base text-center"
        >
          {t("download") + " " + t(movieName)}
        </Link>
      </div>
    </div>
  );
};
export default MovieBox;
