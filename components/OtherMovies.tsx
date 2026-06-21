import { MoviePropTypes } from "@/db";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsFillPlayFill } from "react-icons/bs";

const BLUR_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

const OtherMovieItem: React.FC<{ movie: MoviePropTypes }> = ({ movie }) => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      href={`/${movie._id}`}
      className="flex w-full flex-col gap-3 overflow-hidden rounded-lg"
    >
      <div className="group/trackBox relative">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse rounded-lg bg-surface3" />
        )}
        <Image
          width={400}
          height={400}
          loading="lazy"
          placeholder="blur"
          blurDataURL={BLUR_URL}
          onLoad={() => setLoaded(true)}
          className={`w-full rounded-lg transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          src={movie.imageUrl}
          alt={movie.movieName}
        />
        <div className="absolute right-0 top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-black/60 text-center opacity-0 transition-all duration-300 group-hover/trackBox:opacity-100">
          <p className="text-white">{movie.movieName}</p>
          <div className="text-4xl text-white">
            <BsFillPlayFill />
          </div>
        </div>
      </div>
      <p className="font-EstedadFont text-white/80">{movie.movieName}</p>
    </Link>
  );
};

const OtherMovies: React.FC<{ allMovies: MoviePropTypes[] }> = ({
  allMovies,
}) => {
  const { t } = useTranslation();
  const { query } = useRouter();
  const otherMovies = allMovies.filter((movie) => movie._id !== query.movieId);

  return (
    <div className="flex w-full flex-col gap-4">
      <p className="font-EstedadFont text-lg text-white/80">
        {t("lastestMovies")}
      </p>
      <div className="grid w-full grid-cols-2 gap-4 overflow-hidden text-white lg:flex lg:items-start lg:justify-between">
        {otherMovies.slice(0, 8).map((movie) => (
          <OtherMovieItem key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default OtherMovies;
