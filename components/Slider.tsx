import React from "react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BsHeartFill } from "react-icons/bs";
import TopMovieLabel from "./common/TopMovieLabel";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Slider: React.FC = () => {
  const { t, i18n } = useTranslation();

  const slides = [
    {
      link: "d78978998qw232456453261321g321313feadseqweqwaf",
      name: "exteraction2",
      imageUrl: "https://wallpapercave.com/wp/wp12330728.jpg",
      imdb: 6.8,
    },
    {
      link: "dsdsdad3qwvcxvcxweqweqwasfsagfeadsaf",
      name: "missionImbossible7",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/aY7EBRx2jguJHXWBYpuCYR.jpg",
      imdb: 7.8,
    },
    {
      link: "dsdsdad3qwedeqw456456agfeadsaf",
      name: "meg2",
      imageUrl: "https://images.hdqwalls.com/wallpapers/meg-2-4k-jw.jpg",
      imdb: 5,
    },
    {
      link: "dsdsdad3qeqwewqeqwdsadsadasd",
      name: "oppenheimer",
      imageUrl:
        "https://www.slashfilm.com/img/gallery/how-christopher-nolans-oppenheimer-recreated-a-nuclear-explosion-without-using-cgi/intro-1684863178.jpg",
      imdb: 8.5,
    },
    {
      link: "d3qwedeqweqweqwasfsagfeadsaf",
      name: "spiderman",
      imageUrl:
        "https://i.pinimg.com/originals/f3/17/5b/f3175b3ecba9dd763a2660da4c2d5a0f.jpg",
      imdb: 8.7,
    },
    {
      link: "dsdsdad3qwedeqw456456a321321gfeadseqweqwaf",
      name: "littleMermaid",
      imageUrl:
        "https://www.pixground.com/wp-content/uploads/2023/04/The-Little-Mermaid-2023-4K-Wallpaper-jpg.webp",
      imdb: 7.2,
    },
  ];

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
      className={`group/trackBox mySwiper fadeShow   mb-4 mt-2 flex h-[17rem] w-full cursor-pointer items-center justify-center overflow-hidden transition-all sm:h-[24rem] md:h-[28rem] lg:h-[40rem] lg:max-h-none lg:min-h-max  ${
        i18n.dir() === "rtl" ? "font-VazirFont" : "font-BlackListed"
      }`}
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.imageUrl} className="relative h-full w-full">
            <Link className="h-full w-full" href={slide.link}>
              <Image
                width={2000}
                height={1000}
                src={slide.imageUrl}
                loading="lazy"
                // quality={100}
                blurDataURL={slide.imageUrl}
                placeholder="blur"
                alt="poster"
                className=" backgroundAnimation h-full w-full  scale-[1.05] object-cover duration-300 group-hover/trackBox:scale-100 group-hover/trackBox:brightness-90 lg:object-top"
              />

              <div className="absolute bottom-0 left-0 right-0 top-0 mb-auto ml-auto mr-auto mt-auto flex h-12 w-12 items-center justify-center rounded-full text-white backdrop-blur-md group-hover/trackBox:opacity-0 lg:h-16 lg:w-16">
                {/* <img
                  src={homePageImageUrl}
                  className="relative h-full  w-full opacity-40 blur-xl"
                ></img> */}
                <div className="absolute text-5xl lg:text-6xl">
                  <AiOutlinePlayCircle />
                </div>
                <div className="absolute animate-ping text-5xl lg:text-6xl">
                  <AiOutlinePlayCircle />
                </div>
              </div>

              <div
                dir={i18n.dir()}
                className="absolute right-0  top-0 z-[100] hidden h-full w-full items-center justify-center font-VazirFont duration-300 hover:bg-black/50 hover:backdrop-blur-[8px] lg:flex"
              >
                <div
                  className={`container h-full w-full flex-col items-start justify-center gap-6 p-4  text-base text-white opacity-0 transition-all duration-300 group-hover/trackBox:opacity-100 lg:flex `}
                >
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-2xl">{"10 / " + slide.imdb}</p>
                      <div className="rounded-md font-BlackListed text-[2rem]">
                        IMDB
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex flex-col items-start justify-center gap-5 pt-4 ${
                      i18n.dir() === "rtl"
                        ? "font-VazirFont"
                        : "font-BlackListed"
                    } text-[2rem]`}
                  >
                    <p>{t(slide.name)}</p>
                  </div>
                  <span className="pt-4">{<TopMovieLabel />}</span>
                </div>
              </div>

              <div className="absolute bottom-8 left-0 right-0 ml-auto mr-auto w-full lg:bottom-[8%] lg:hidden">
                <div className="fadeShow2 flex flex-col items-center justify-start p-2 text-white backdrop-blur-sm backdrop-brightness-50 duration-300 group-hover/trackBox:translate-y-[-1rem]  lg:p-4 lg:text-3xl">
                  <p>{t(slide.name)}</p>
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
