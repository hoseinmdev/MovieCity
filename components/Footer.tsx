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
    <div className="p-6 border-t  border-gray-500 w-full flex justify-center items-center mt-10 text-center">
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8 lg:gap-0 lg:justify-between lg:flex-row items-center h-full">
        <div className="order-1 lg:order-none flex justify-center items-center gap-3  text-2xl w-full h-full ">
          <button className="lg:text-white text-gray-800 hover:scale-110 hover:text-white hover:opacity-100 dark:text-white dark:opacity-50">
            <AiFillInstagram />
          </button>
          <button className="lg:text-white text-gray-800 hover:scale-110 hover:text-white  hover:opacity-100 dark:text-white dark:opacity-50">
            <AiFillTwitterCircle />
          </button>
          <button className="lg:text-white text-gray-800 hover:scale-110 hover:text-white hover:opacity-100 dark:text-white dark:opacity-50">
            <AiFillYoutube />
          </button>
          <button className="lg:text-white text-gray-800 hover:scale-110 hover:text-white hover:opacity-100 dark:text-white dark:opacity-50">
            <FaTelegram />
          </button>
        </div>
        <div className="order-1 lg:border-x border-x-stone-600 lg:order-none flex w-full cursor-default flex-col items-center px-4 justify-center gap-1  text-base text-gray-800 hover:text-white hover:opacity-100 dark:text-white dark:opacity-50 lg:text-white">
          <p>{t("material")}</p>
        </div>

        <div className="flex w-full flex-col flex-wrap items-center justify-center gap-2 h-full ">
          <button className="lg:text-white text-gray-800 hover:text-white hover:opacity-100  dark:text-white dark:opacity-50">
            {t("myNumber")}
          </button>
          <button className="text-gray-800 hover:text-white hover:opacity-100 dark:text-white  dark:opacity-50 lg:text-white">
            {t("email")}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
