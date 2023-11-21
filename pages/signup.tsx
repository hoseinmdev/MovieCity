import React from "react";
import Johnwick from "@/assets/johnWick.jpg";
import Image from "next/image";
import SelectLanguage from "@/components/common/SelectLanguage";
import { useTranslation } from "react-i18next";

const SignUp: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={` fadeShow flex h-screen w-full items-center justify-between text-white bg-stone-900 ${
        i18n.dir() === "rtl" ? "font-VazirFont" : "font-BlackListed"
      }`}
    >
      <div
        dir={i18n.dir()}
        className=" flex h-full w-full items-center justify-center "
      >
        <div className="relative flex h-full w-[80%] md:w-[60%] flex-col items-start  justify-center md:gap-4 lg:gap-10 gap-10 lg:w-[70%] 2xl:w-[55%]">
          <SelectLanguage />
          <div className="fadeShow1 flex flex-col gap-6">
            <p className="text-xl lg:text-2xl">{t("StartforFree")}</p>
            <p className="text-3xl lg:text-4xl 2xl:text-5xl">
              {t("CreateAnAccount")}{" "}
            </p>
          </div>

          <div className="fadeShow2 flex w-full flex-col gap-4 ">
            <input
              type="text"
              className="rounded-lg border border-red-500 p-3 text-lg lg:text-xl"
              placeholder={t("EnterYourEmail")}
            />
            <input
              type="text"
              className="rounded-lg border border-red-500 p-3 text-lg lg:text-xl"
              placeholder={t("EnterYourPassword")}
            />
          </div>

          <div className="fadeShow3 flex w-full flex-col gap-4">
            <button className="w-full rounded-lg bg-red-500 py-2 text-xl text-white lg:py-3 lg:text-xl 2xl:text-2xl">
              {t("SignUp")}
            </button>
            <button className="w-full rounded-lg bg-red-500 py-2 text-xl text-white lg:py-3 lg:text-xl 2xl:text-2xl ">
              {t("SignUpWithGoogle")}
            </button>
            <div className="flex gap-1 text-white/60">
              {t("AlreadyHaveAccount")}{" "}
              <p className="text-red-500">{t("SignUp")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden h-full 2xl:w-full lg:w-[80%] lg:block overflow-hidden">
        <Image
          width={2000}
          height={2000}
          src={Johnwick}
          alt="dsa"
          className="h-full w-full object-cover backgroundAnimation2"
        />
      </div>
    </div>
  );
};
export default SignUp;
