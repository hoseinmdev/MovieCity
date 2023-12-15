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
      image2Url:
        "https://media.newstrack.in/amp/uploads/entertainment/hollywood-news/May/16/big_thumb/gjig_64635c855dfe7.jpg",
      imdb: 6.8,
      desc: "exteraction2Desc",
    },
    {
      link: "dsdsdad3qwvcxvcxweqweqwasfsagfeadsaf",
      name: "missionImbossible7",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/aY7EBRx2jguJHXWBYpuCYR.jpg",
      image2Url:
        "https://m.media-amazon.com/images/I/71-sziO1OsL._AC_UF894,1000_QL80_.jpg",
      imdb: 7.8,
      desc: "missionImbossible7Desc",
    },
    {
      link: "dsdsdad3qwedeqw456456agfeadsaf",
      name: "meg2",
      imageUrl: "https://images.hdqwalls.com/wallpapers/meg-2-4k-jw.jpg",
      image2Url:
        "https://www.themoviedb.org/t/p/original/FQHtuf2zc8suMFE28RyvFt3FJN.jpg",
      imdb: 5,
      desc: "meg2Desc",
    },
    {
      link: "dsdsdad3qeqwewqeqwdsadsadasd",
      name: "oppenheimer",
      imageUrl:
        "https://www.slashfilm.com/img/gallery/how-christopher-nolans-oppenheimer-recreated-a-nuclear-explosion-without-using-cgi/intro-1684863178.jpg",
      image2Url:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
      imdb: 8.5,
      desc: "oppenheimerDesc",
    },
    {
      link: "d3qwedeqweqweqwasfsagfeadsaf",
      name: "spiderman",
      imageUrl:
        "https://i.pinimg.com/originals/f3/17/5b/f3175b3ecba9dd763a2660da4c2d5a0f.jpg",
      image2Url:
        "https://preview.redd.it/official-poster-for-spider-man-across-the-spider-verse-v0-u14ntorg727a1.jpg?width=640&crop=smart&auto=webp&s=b7fda7dbb36e311d53e1cc12144ece9d81ca9886",
      imdb: 8.7,
      desc: "spidermanDesc",
    },
    {
      link: "dsdsdad3qwedeqw456456a321321gfeadseqweqwaf",
      name: "littleMermaid",
      imageUrl:
        "https://www.pixground.com/wp-content/uploads/2023/04/The-Little-Mermaid-2023-4K-Wallpaper-jpg.webp",
      image2Url:
        "https://images.fandango.com/images/fandangoblog/TheLittleMermaid_1080x1350_Digital_Poster.jpg",
      imdb: 7.2,
      desc: "littleMermaidDesc",
    },
  ];

  return (
    <Swiper
      modules={[EffectFade, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      effect="fade"
      dir="ltr"
      // autoplay={{
      //   delay: 5000,
      //   pauseOnMouseEnter: true,
      //   disableOnInteraction: false,
      // }}
      className={`group/trackBox mySwiper fadeShow   mb-4 mt-2 flex h-[20rem] w-full cursor-pointer items-center justify-center overflow-hidden rounded-b-2xl transition-all sm:h-[24rem] md:h-[28rem] lg:h-[32rem] lg:max-h-none lg:min-h-max 2xl:h-[40rem]  ${
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
                className=" backgroundAnimation h-full w-full  object-cover duration-300 group-hover/trackBox:brightness-90 lg:object-top"
              />

              {/* <div className="absolute bottom-0 left-0 right-0 top-0 mb-auto ml-auto mr-auto mt-auto flex h-12 w-12 items-center justify-center rounded-full text-white backdrop-blur-md group-hover/trackBox:opacity-0 lg:h-16 lg:w-16">
                <div className="absolute text-5xl lg:text-6xl">
                  <AiOutlinePlayCircle />
                </div>
                <div className="absolute animate-ping text-5xl lg:text-6xl">
                  <AiOutlinePlayCircle />
                </div>
              </div> */}

              <div
                dir={i18n.dir()}
                className="absolute right-0  top-0 z-[100] h-full w-full items-center justify-center bg-black/50 font-VazirFont backdrop-blur-[0px] duration-300 lg:flex"
              >
                <div
                  className={`container flex h-full w-full  items-center justify-between gap-6 p-4  text-base text-white  opacity-100 transition-all duration-300 `}
                >
                  <div className="flex w-max flex-col items-start gap-3 lg:gap-8">
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center justify-center gap-2">
                        <p className="lg:text-2xl">{"10 / " + slide.imdb}</p>
                        <div className="rounded-md text-yellow-500 lg:text-[2rem]">
                          IMDB
                        </div>
                      </div>
                    </div>
                    <div
                      className={`flex flex-col items-start justify-center gap-5 font-EstedadFont text-sm lg:text-[2rem]`}
                    >
                      <p>{t(slide.name)}</p>
                    </div>
                    <span className="hidden lg:block">{<TopMovieLabel />}</span>
                    <p className="hidden w-1/2 text-lg lg:block">
                      {slide.desc
                        ? t(slide.desc).length > 180
                          ? t(slide.desc).slice(0, 200) + "..."
                          : t(slide.desc)
                        : ""}
                    </p>
                    <p className="w-full text-sm opacity-75 lg:hidden">
                      {slide.desc
                        ? t(slide.desc).length > 80
                          ? t(slide.desc).slice(0, 80) + "..."
                          : t(slide.desc)
                        : ""}
                    </p>
                  </div>
                  <div className="self-start lg:self-center">
                    <Image
                      width={600}
                      height={600}
                      quality={100}
                      className="min-h-[9rem] max-w-[6rem] rounded-lg border-2 border-white/70 bg-cover object-cover brightness-90 lg:min-h-[24rem]  lg:min-w-[18rem]"
                      src={slide.image2Url || ""}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* <div className="absolute bottom-8 left-0 right-0 ml-auto mr-auto w-full lg:bottom-[8%] lg:hidden">
                <div className="fadeShow2 flex flex-col items-center justify-start p-2 font-EstedadFont text-white backdrop-blur-sm backdrop-brightness-50 duration-300 group-hover/trackBox:translate-y-[-1rem]  lg:p-4 lg:text-3xl">
                  <p>{t(slide.name)}</p>
                </div>
              </div> */}
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Slider;
