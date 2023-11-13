import React from "react";
import { useTranslation } from "react-i18next";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
const Footer: React.FC = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className="mt-10 flex  w-full items-center justify-center bg-transparent p-6 text-center">
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 lg:w-1/2 lg:flex-row lg:justify-between lg:gap-0">
        <div className="order-1 flex h-full w-full items-center justify-center  gap-3 text-2xl lg:order-none ">
          <button className=" text-white/70 hover:scale-110 hover:text-white hover:opacity-100">
            <AiFillInstagram />
          </button>
          <button className=" text-white/70 hover:scale-110 hover:text-white  hover:opacity-100">
            <AiFillTwitterCircle />
          </button>
          <button className=" text-white/70 hover:scale-110 hover:text-white hover:opacity-100">
            <AiFillYoutube />
          </button>
          <button className=" text-white/70 hover:scale-110 hover:text-white hover:opacity-100">
            <FaTelegram />
          </button>
        </div>
        <div className="order-1 flex w-full cursor-default flex-col items-center justify-center gap-1 border-x-stone-600 px-4 text-base   text-white/70 hover:text-white hover:opacity-100 lg:order-none lg:border-x">
          <p>{t("material")}</p>
        </div>

        <div className="flex h-full w-full flex-col flex-wrap items-center justify-center gap-2 ">
          <button className=" text-white/70 hover:text-white  hover:opacity-100">
            {t("myNumber")}
          </button>
          <button className=" text-white/70 hover:text-white  hover:opacity-100">
            {t("email")}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
