import allMovies, { MoviePropTypes } from "@/db";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsFillPlayFill } from "react-icons/bs";

const OtherMovies: React.FC<{ allMovies: MoviePropTypes[] }> = ({
  allMovies,
}) => {
  const { t, i18n } = useTranslation();
  const { query } = useRouter();
  const otherMovies = allMovies.filter((movie) => movie.id !== query.movieId);
  return (
    <div className="w-full flex flex-col gap-4">
      <p className="text-white/80 text-lg">{t("lastestMovies")}</p>
      <div className="grid w-full grid-cols-2 gap-4 overflow-hidden text-white lg:flex lg:items-start lg:justify-between">
        {otherMovies.slice(0, 8).map((movie) => {
          return (
            <Link
              href={`${movie.id}`}
              className=" flex w-full flex-col gap-3 overflow-hidden rounded-lg"
              key={movie.id}
            >
              <div className="group/trackBox relative">
                <Image
                  placeholder="blur"
                  loading="lazy"
                  blurDataURL={movie.id}
                  width={400} 
                  height={400}
                  className=""
                  src={movie.imageUrl}
                  alt=""
                />
                <div className="absolute right-0 top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-black/60 text-center opacity-0 transition-all duration-300 group-hover/trackBox:opacity-100">
                  <p>{t(movie.movieName)}</p>
                  <div className="text-4xl">
                    <BsFillPlayFill />
                  </div>
                </div>
              </div>
              <p className="text-white/80">{t(movie.movieName)}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default OtherMovies;
