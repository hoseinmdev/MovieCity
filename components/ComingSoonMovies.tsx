import { comingSoonMoviesList } from "@/db";
import React from "react";
import { BsFire } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const ComingSoonMovies: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="hidden w-[40%] flex-col items-center justify-start gap-4 text-white lg:flex">
      <div className="flex w-full items-center justify-start gap-2 pr-4 text-xl">
        <div>
          <BsFire />
        </div>
        <p> {t("comingSoon")} </p>
      </div>
      <div className="flex w-full flex-col items-center justify-start gap-6">
        {comingSoonMoviesList.map((item) => {
          return (
            <div
              key={item.imageUrl}
              className="relative h-auto w-full overflow-hidden rounded-lg"
            >
              <img className="w-full " src={item.imageUrl} alt="" />
              <div className="absolute bottom-0 right-0 flex w-full items-center justify-between bg-black/80 px-2 py-2">
                <p>{t(item.movieName)}</p>
                <div className="animate-pulse rounded-md border border-white p-2 text-center text-sm text-white">
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
