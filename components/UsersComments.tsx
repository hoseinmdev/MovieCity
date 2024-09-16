import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Autoplay, Pagination } from "swiper/modules";

const UsersComments: React.FC = () => {
  const { t, i18n } = useTranslation();
  const comments = [
    {
      name: "Reza Soltani",
      image: "/icons/boy.svg",
      comment:
        "This site is very beautifull and usefull for me and it can be usefull for all film lovers!",
    },
    {
      name: "Rana Salehi",
      image: "/icons/girl.svg",
      comment:
        "This site is very beautifull and usefull for me and it can be usefull for all film lovers!",
    },
    {
      name: "Iman",
      image: "/icons/boy2.svg",
      comment:
        "This site is very beautifull and usefull for me and it can be usefull for all film lovers!",
    },
    {
      name: "Sara",
      image: "/icons/girl2.svg",
      comment:
        "This site is very beautifull and usefull for me and it can be usefull for all film lovers!",
    },
  ];
  return (
    <div className="container inset-0 mx-auto flex w-full flex-col gap-4 px-2">
      <p className="fadeShow2 font-EstedadFont text-xl text-white/80">
        Users comments
      </p>
      <Swiper
        dir="ltr"
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1.5 },
          1024: {
            slidesPerView: 3.5,
          },
        }}
        className="h-60 lg:h-80 w-full !rounded-3xl bg-[#27272A] !p-2 lg:!p-4"
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 2000 }}
      >
        {comments.map((item) => {
          return (
            <SwiperSlide
              className=" flex max-h-48 lg:max-h-64 w-full flex-col !rounded-3xl bg-[#3F3F46]/50  p-3 lg:p-5"
              key={item.name}
            >
              <div className="flex items-center justify-start gap-2">
                <Image
                  alt=""
                  src={item.image}
                  className="lg:h-16 lg:w-16 w-12 h-12 bg-cover object-cover"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col">
                  <p className="text-base lg:text-xl text-white">{item.name}</p>
                  <p className="animate-pulse font-bold text-primary text-sm lg:text-lg">
                    Movie city user
                  </p>
                </div>
              </div>
              <div className="my-4 w-full rounded-3xl bg-[#27272A] p-4 text-white">
                <p className="line-clamp-3 text-sm lg:text-lg">{item.comment}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default UsersComments;
