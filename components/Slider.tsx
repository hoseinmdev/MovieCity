import React from "react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import TopMovieLabel from "./common/TopMovieLabel";
import Button from "./common/Button";
import { MoviePropTypes } from "@/db";

interface SliderProps {
  movies: MoviePropTypes[];
}

const Slider: React.FC<SliderProps> = ({ movies }) => {
  const { i18n, t } = useTranslation();

  if (!movies.length) return null;

  return (
    <Swiper
      modules={[EffectFade, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      effect="fade"
      dir="ltr"
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      className={`group/trackBox mySwiper fadeShow mb-4 mt-2 flex h-[20rem] w-full cursor-pointer items-center justify-center overflow-hidden rounded-b-2xl transition-all sm:h-[24rem] md:h-[28rem] lg:h-[32rem] lg:max-h-none lg:min-h-max 2xl:h-[40rem] ${
        i18n.dir() === "rtl" ? "font-VazirFont" : "font-BlackListed"
      }`}
    >
      {movies.map((movie) => {
        return (
          <SwiperSlide key={movie._id} className="relative h-full w-full">
            <Link className="h-full w-full" href={`/${movie._id}`}>
              <Image
                width={2000}
                height={1000}
                src={movie.backgroundImageUrl || movie.imageUrl}
                alt={movie.movieName}
                className="backgroundAnimation h-full w-full object-cover duration-300 group-hover/trackBox:brightness-90 lg:object-top"
              />
              <div
                dir={i18n.dir()}
                className="absolute right-0 top-0 z-[100] h-full w-full items-center justify-center bg-black/50 font-VazirFont backdrop-blur-[0px] duration-300 lg:flex"
              >
                <div className="container flex h-full w-full items-center justify-between gap-6 p-4 text-base text-white opacity-100 transition-all duration-300">
                  <div className="flex w-max flex-col items-start gap-3 lg:gap-6">
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center justify-center gap-2">
                        <Image
                          width={50}
                          height={50}
                          className="lg:w-auto w-10"
                          src={"/icons/imdb.svg"}
                          alt=""
                        />
                        <p className="text-xs lg:text-2xl">
                          {"10 / " + movie.imdbScore}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-5 font-EstedadFont text-sm lg:text-[2rem]">
                      <p>{movie.movieName}</p>
                    </div>
                    <span className="hidden lg:block">
                      <TopMovieLabel />
                    </span>
                    <p className="hidden w-1/2 text-lg lg:block">
                      {movie.description && movie.description.length > 200
                        ? movie.description.slice(0, 200) + "..."
                        : movie.description}
                    </p>
                    <p className="w-full text-sm opacity-75 lg:hidden">
                      {movie.description && movie.description.length > 80
                        ? movie.description.slice(0, 80) + "..."
                        : movie.description}
                    </p>
                    <Button
                      type="primary"
                      className="flex items-center justify-center gap-2"
                    >
                      <Image
                        width={15}
                        height={15}
                        alt=""
                        src={"/icons/play.svg"}
                        className="w-5 lg:w-auto"
                      />
                      <p className="lg:text-2xl">{t("watchNow")}</p>
                    </Button>
                  </div>
                  <div className="self-start lg:self-center lg:block hidden">
                    <Image
                      width={600}
                      height={600}
                      quality={100}
                      className="min-h-[9rem] max-w-[6rem] rounded-lg border-2 border-white/70 bg-cover object-cover brightness-90 lg:min-h-[24rem] lg:min-w-[18rem]"
                      src={movie.imageUrl}
                      alt={movie.movieName}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
