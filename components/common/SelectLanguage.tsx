import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiWorld } from "react-icons/bi";
import { UseFormReset } from "react-hook-form";

interface ResetForm {
  reset?: UseFormReset<{
    email?: string | undefined;
    password?: string | undefined;
  }>;
}

const SelectLanguage: React.FC<ResetForm> = ({ reset }) => {
  const { i18n } = useTranslation();
  const [items] = useState([
    { label: "PERSIAN", value: "fa" },
    { label: "ENGLISH", value: "en" },
  ]);
  const [showLanguages, setShowLanguages] = useState(false);
  const changeLanguage = (lang: string) => {
    reset !== undefined ? reset() : "";
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setShowLanguages(false);
  };

  const languagesIconClickHandler = () => {
    setShowLanguages(!showLanguages);
  };
  return (
    <div className="relative z-[99]">
      <div
        className={`flex items-center  justify-center gap-2 border border-primary bg-transparent p-2 text-white transition-all duration-300 lg:cursor-pointer lg:px-6 lg:py-2 ${
          !showLanguages
            ? "rounded-lg"
            : " rounded-lg rounded-bl-none rounded-br-none"
        }`}
        onClick={languagesIconClickHandler}
      >
        <p className="text-sm lg:text-base">
          {i18n.language === "fa" ? "فارسی" : "ENGLISH"}
        </p>
        <div className="text-base lg:text-xl">
          <BiWorld />
        </div>
      </div>
      {showLanguages && (
        <div className="fadeShow w-full top-13 absolute left-0 flex flex-col items-center justify-center gap-2 rounded-bl-xl rounded-br-xl border border-primary bg-transparent px-[1.35rem] py-3 text-sm backdrop-blur-md lg:px-[1.5rem] lg:text-base">
          {items.map((i, index) => {
            return (
              <p
                key={index}
                className="text-white lg:cursor-pointer"
                onClick={() => {
                  changeLanguage(i.value);
                }}
              >
                {i.label}
              </p>
            );
          })}
        </div>
      )}

      <div className={`absolute ${i18n.dir() === "rtl" ? "right-[-0.5rem]": "left-[-0.5rem]"} top-[-0.5rem] h-4 w-4 rounded-full bg-primary`}></div>
      <div className={`absolute ${i18n.dir() === "rtl" ? "right-[-0.5rem]": "left-[-0.5rem]"} top-[-0.5rem] h-4 w-4 animate-ping rounded-full bg-primary`}></div>
    </div>
  );
};
export default SelectLanguage;
