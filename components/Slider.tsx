import React from "react";
import { EffectFade, Pagination } from "swiper/modules";

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

const Slider: React.FC = () => {
  const { t, i18n } = useTranslation();

  const slides = [
    {
      link: "d78978998qw232456453261321g321313feadseqweqwaf",
      name: "exteraction2",
      imageUrl:
        "https://images.hdqwalls.com/wallpapers/netflix-extraction-2020-4k-jc.jpg",
    },
    {
      link: "dsdsdad3qwvcxvcxweqweqwasfsagfeadsaf",
      name: "missionImbossible7",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/a9aee6c1-875c-4efc-832c-ced5c496b183/tom-cruise-had-anxiety-fueled-sleepless-nights-about-landing-the-perfect-ending-for-mission-impossible-dead-reckoning-part-one.jpg",
    },
    {
      link: "dsdsdad3qwedeqw456456agfeadsaf",
      name: "meg2",
      imageUrl: "https://images3.alphacoders.com/132/1324999.jpeg",
    },
    {
      link:"dsdsdad3qeqwewqeqwdsadsadasd",
      name: "oppenheimer",
      imageUrl:
        "https://www.slashfilm.com/img/gallery/how-christopher-nolans-oppenheimer-recreated-a-nuclear-explosion-without-using-cgi/intro-1684863178.jpg",
    },
    {
      link: "d3qwedeqweqweqwasfsagfeadsaf",
      name: "spiderman",
      imageUrl:
        "https://i.pinimg.com/originals/f3/17/5b/f3175b3ecba9dd763a2660da4c2d5a0f.jpg",
    },
    {
      link: "dsdsdad3qwedeqw456456a321321gfeadseqweqwaf",
      name: "littleMermaid",
      imageUrl:
        "https://www.pixground.com/wp-content/uploads/2023/04/The-Little-Mermaid-2023-4K-Wallpaper-jpg.webp",
    },
  ];

  return (
    <Swiper
      modules={[EffectFade, Pagination]}
      pagination={{ clickable: true }}
      effect="fade"
      dir="ltr"
      className="cursor-pointer group/trackBox mb-4  mySwiper fadeShow container mt-2 flex max-h-[14rem] min-h-[14rem] w-full items-center justify-center overflow-hidden transition-all lg:h-[40rem] lg:max-h-none lg:min-h-max 2xl:rounded-3xl"
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.imageUrl}>
            <Link href={`${slide.link}`} className="relative h-full w-full">
              <Image
                width={2000}
                height={2000}
                src={slide.imageUrl}
                loading="lazy"
                // quality={100}
                // placeholder="blur"
                alt="poster"
                className=" backgroundAnimation w-full scale-[1.15] duration-300 group-hover/trackBox:scale-100 group-hover/trackBox:brightness-90"
              />
              <div className="absolute bottom-5 left-0 right-0 ml-auto mr-auto w-full lg:bottom-[32%] ">
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
