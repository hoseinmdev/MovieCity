import { MoviePropTypes } from "@/db";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

const BLUR_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

const MovieBox: React.FC<MoviePropTypes> = ({
  _id,
  imageUrl,
  imdbScore,
  movieName,
  popularity,
  description,
  backgroundImageUrl,
}) => {
  const { t } = useTranslation();
  const [posterLoaded, setPosterLoaded] = useState(false);

  return (
    <div className="relative flex min-h-[29rem] w-full flex-col items-center justify-between overflow-hidden rounded-xl bg-stone-800 brightness-90 lg:w-[100%]">
      <Link
        href={`${_id}`}
        className="relative min-h-[12rem] w-full bg-cover transition duration-300 lg:min-h-[12rem] lg:hover:opacity-70"
        style={{
          backgroundImage: backgroundImageUrl
            ? "url(" + backgroundImageUrl + ")"
            : undefined,
        }}
      >
        <div className="absolute top-[10rem] z-10 h-20 w-full scale-150 bg-stone-800 blur-md lg:scale-110"></div>

        {!posterLoaded && (
          <div className="absolute right-2 top-6 z-10 h-[9rem] w-[6rem] animate-pulse rounded-xl bg-stone-600 lg:top-2 lg:w-[20%]" />
        )}
        <Image
          width={400}
          height={400}
          placeholder="blur"
          blurDataURL={BLUR_URL}
          onLoad={() => setPosterLoaded(true)}
          className={`absolute right-2 top-6 z-10 w-[6rem] rounded-xl shadow-xl transition-opacity duration-500 lg:top-2 lg:w-[20%] ${
            posterLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={imageUrl}
          alt={movieName}
        />
      </Link>
      <div className="z-10 flex h-full w-full flex-col items-start justify-center gap-2 p-4 text-white">
        <p className="font-EstedadFont">{movieName}</p>
        <p className="min-h-[5rem] text-sm text-white/80">
          {description && description.length > 120
            ? description.slice(0, 120) + "..."
            : description}
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
          href={`${_id}`}
          className="w-full rounded-lg bg-primary p-2 text-center font-EstedadFont text-sm text-white transition-all duration-300 hover:brightness-110 lg:text-base"
        >
          {t("download") + " " + movieName}
        </Link>
      </div>
    </div>
  );
};
export default MovieBox;
