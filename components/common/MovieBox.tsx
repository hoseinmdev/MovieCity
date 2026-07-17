import { MoviePropTypes } from "@/types";
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
  genre,
}) => {
  const { t } = useTranslation();
  const [posterLoaded, setPosterLoaded] = useState(false);

  return (
    <div className="glass glass-hover group relative flex min-h-[29rem] w-full flex-col items-center justify-between overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-[0_8px_32px_rgba(124,58,237,0.18)] lg:w-[100%]">
      <Link
        href={`${_id}`}
        className="relative min-h-[12rem] w-full bg-cover transition duration-300 lg:min-h-[12rem] lg:group-hover:opacity-80"
        style={{
          backgroundImage: backgroundImageUrl
            ? "url(" + backgroundImageUrl + ")"
            : undefined,
        }}
      >
        <div className="absolute top-[10rem] z-10 h-20 w-full scale-150 bg-surface2/80 blur-md lg:scale-110"></div>

        {!posterLoaded && (
          <div className="glass absolute right-2 top-6 z-10 h-[9rem] w-[6rem] animate-pulse rounded-xl lg:top-2 lg:w-[20%]" />
        )}
        <Image
          width={400}
          height={400}
          placeholder="blur"
          blurDataURL={BLUR_URL}
          onLoad={() => setPosterLoaded(true)}
          className={`absolute right-2 top-6 z-10 w-[6rem] rounded-xl shadow-xl ring-1 ring-white/10 transition-opacity duration-500 lg:top-2 lg:w-[20%] ${
            posterLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={imageUrl}
          alt={movieName}
        />
      </Link>
      <div className="z-10 flex h-full w-full flex-col items-start justify-center gap-2 p-4 text-white">
        <p className="font-EstedadFont">{movieName}</p>
        {genre && (
          <span className="glass rounded-full px-3 py-1 text-xs text-white/70">
            {genre}
          </span>
        )}
        <p className="min-h-[5rem] text-sm text-white/80">
          {description && description.length > 120
            ? description.slice(0, 120) + "..."
            : description}
        </p>
        <div className="flex items-center justify-center gap-2 pt-4">
          <div className="flex flex-col items-center justify-center gap-1 text-white">
            <div className="glow-primary-sm rounded-lg bg-primary px-2 py-1 text-2xl">
              <AiFillHeart />
            </div>
            <p className="text-sm text-primary">{popularity + "%"}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 text-white">
            <div className="glow-gold rounded-lg bg-gold px-2 py-1 text-2xl">
              <AiFillStar />
            </div>
            <p className="text-sm text-gold">{"10 / " + imdbScore}</p>
          </div>
        </div>
        <Link
          href={`${_id}`}
          className="glow-primary-sm w-full rounded-lg bg-primary p-2 text-center font-EstedadFont text-sm text-white transition-all duration-300 hover:bg-primaryHover lg:text-base"
        >
          {t("download") + " " + movieName}
        </Link>
      </div>
    </div>
  );
};
export default MovieBox;
