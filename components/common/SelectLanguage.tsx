import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiWorld } from "react-icons/bi";
const SelectLanguage: React.FC = () => {
  const { i18n } = useTranslation();
  const [items] = useState([
    { label: "PERSIAN", value: "fa" },
    { label: "ENGLISH", value: "en" },
  ]);
  const [showLanguages, setShowLanguages] = useState(false);
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setShowLanguages(false);
  };

  const languagesIconClickHandler = () => {
    setShowLanguages(!showLanguages);
  };
  return (
    <div className="relative ">
      <div
        className={`flex transition-all duration-300 items-center justify-center border border-red-500 gap-2 lg:px-4 lg:py-3 p-2 lg:cursor-pointer text-white bg-black/80 ${
          !showLanguages
            ? "rounded-lg"
            : " rounded-lg rounded-bl-none rounded-br-none"
        }`}
        onClick={languagesIconClickHandler}
      >
        {i18n.language === "fa" ? "PERSIAN" : "ENGLISH"}
        <div className="text-xl">
          <BiWorld />
        </div>
      </div>
      {showLanguages && (
        <div className="fadeShow absolute left-0 top-13 flex flex-col items-center justify-center gap-2 rounded-bl-xl rounded-br-xl border bg-black/80 border-red-500 px-[1.35rem] lg:px-[1.85rem] py-3">
          {items.map((i, index) => {
            return (
              <p
                key={index}
                className="lg:cursor-pointer"
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

      <div className="w-4 h-4 rounded-full bg-red-500 absolute top-[-0.5rem] right-[-0.5rem]"></div>
      <div className="w-4 h-4 rounded-full bg-red-500 animate-ping absolute top-[-0.5rem] right-[-0.5rem]"></div>
    </div>
  );
};
export default SelectLanguage;
