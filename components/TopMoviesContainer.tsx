import React, { useState, useEffect } from "react";
import TopMovieBox from "./common/TopMovieBox";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";
import { MoviePropTypes } from "@/db";
import MovieBox from "./common/MovieBox";

const TopMoviesContainer: React.FC<{ data: MoviePropTypes[] }> = ({ data }) => {
  const { t,i18n } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-start justify-center gap-2">
        <p className="fadeShow2 text-xl text-white/80">{t("topContent")}</p>
        <div className=" container hidden w-full grid-cols-2 gap-2 lg:grid lg:grid-cols-4 lg:gap-4">
          {data?.map((item) => {
            if (item.top) {
              return (
                <TopMovieBox
                  id={item.id}
                  key={item.imageUrl}
                  homePageImageUrl={item.homePageImageUrl}
                  imageUrl={item.imageUrl}
                  imdbScore={item.imdbScore}
                  movieName={`${t(item.movieName)}`}
                  popularity={item.popularity}
                  top={item.top}
                />
              );
            }
          })}
        </div>

        <div dir="ltr" className="w-full p-3 lg:hidden">
          <Swiper
            slidesPerView={1.15}
            grid={{
              rows: 2,
              fill: "row",
            }}
            spaceBetween={20}
            modules={[Grid, Pagination]}
            className="mySwiper w-full"
          >
            {data?.map((item) => {
              if (item.top) {
                return (
                  <SwiperSlide key={item.imageUrl}>
                    <TopMovieBox
                      id={item.id}
                      homePageImageUrl={item.homePageImageUrl}
                      imageUrl={item.imageUrl}
                      imdbScore={item.imdbScore}
                      movieName={`${t(item.movieName)}`}
                      popularity={item.popularity}
                      top={item.top}
                    />
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default TopMoviesContainer;
