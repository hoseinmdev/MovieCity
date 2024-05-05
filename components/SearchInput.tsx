import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Modal from "./common/Modal";
import { en } from "@/en";
import axios from "axios";
import { MoviePropTypes } from "@/db";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const SearchInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [allMovies, setAllMovies] = useState<MoviePropTypes[]>([]);
  const [foundMovies, setFoundMovies] = useState<MoviePropTypes[]>([]);
  const useRouters = useRouter();
  useEffect(() => {
    axios.get("https://silent-holy-mum.glitch.me/movies").then((res) => {
      setAllMovies(res.data);
    });
  }, []);
  useEffect(() => {
    setInputValue("");
  }, [useRouters.asPath]);
  const searchInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const findedItems = allMovies.filter((p: any) =>
      t(p.movieName)
        .toLowerCase()
        .includes(e.currentTarget.value.toLowerCase()),
    );
    setFoundMovies(findedItems);
    setInputValue(e.currentTarget.value);
  };
  return (
    <>
      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-stone-800 p-2 lg:w-3/4 lg:p-3">
        <input
          value={inputValue}
          onChange={searchInputHandler}
          className="w-full bg-stone-800 text-white/60 outline-none"
          placeholder={t("search")}
        />
        <div className="animate-bounce text-xl text-white/60 lg:text-2xl">
          <CiSearch />
        </div>
      </div>
      {inputValue && foundMovies.length !== 0 && (
        <Modal>
          <div className="container ml-auto mr-auto flex h-full w-full flex-col items-center justify-start gap-3 overflow-auto p-4">
            <p className=" lg:self-start lg:text-xl">{t("foundMovies")}</p>
            <div className="flex h-[90%] w-full flex-col items-start justify-start gap-3 overflow-auto rounded-3xl p-1 lg:gap-5">
              {foundMovies.map((m) => {
                return (
                  <SearchedMovie
                    key={m._id}
                    id={m._id}
                    imageUrl={m.imageUrl}
                    movieName={m.movieName}
                    backgroundImageUrl={m.backgroundImageUrl}
                    desc={m.description}
                  />
                );
              })}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

interface SearchedMovieProps {
  movieName: string;
  imageUrl: string;
  backgroundImageUrl?: string;
  desc?: string;
  id: string;
}
const SearchedMovie: React.FC<SearchedMovieProps> = ({
  movieName,
  imageUrl,
  backgroundImageUrl,
  desc,
  id,
}) => {
  return (
    <Link
      href={id}
      className="relative max-h-[8rem] min-h-[7rem] w-full overflow-hidden rounded-lg lg:max-h-[16rem] lg:min-h-[16rem]"
    >
      <Image
        width={1000}
        height={1000}
        quality={100}
        src={backgroundImageUrl || ""}
        alt="sa"
        className="h-full w-full bg-current object-cover object-left blur-sm brightness-75 lg:blur-md lg:brightness-50"
      />
      <div className="absolute right-0 top-2 flex w-full items-start justify-start gap-4">
        <Image
          width={200}
          height={200}
          src={imageUrl}
          quality={100}
          alt="sa"
          className=" max-w-20 max-h-28 rounded-xl bg-cover object-cover lg:max-h-full lg:max-w-[10rem]"
        />
        <div className="flex flex-col lg:p-2">
          <p className="text-sm lg:text-xl">{t(movieName)}</p>
          <p className="text-xs text-white/70 lg:hidden">
            {desc
              ? t(desc).length > 180
                ? t(desc).slice(0, 180) + "..."
                : t(desc)
              : ""}
          </p>
          <p className="hidden w-1/2 text-base text-white/70 lg:block">
            {t(desc || "")}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default SearchInput;
