import React, { useState } from "react";
import Johnwick from "@/assets/johnWick.jpeg";
import Image from "next/image";
import SelectLanguage from "@/components/common/SelectLanguage";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const SignIn: React.FC = () => {
  interface InputsData {
    email: string;
    password: string;
  }
  const { t, i18n } = useTranslation();
  const [inputsData, setInputsData] = useState<InputsData>({
    email: "",
    password: "",
  });
  return (
    <div
      className={` fadeShow flex h-screen w-full items-center justify-between bg-stone-900 text-white  ${
        i18n.dir() === "rtl" ? "font-VazirFont" : "font-BlackListed"
      }`}
    >
      <div
        dir={i18n.dir()}
        className="flex h-full w-full items-center justify-center "
      >
        <div className="relative flex h-full w-[80%] flex-col items-start justify-start  gap-10 pt-10 md:w-[60%] md:gap-4 lg:w-[70%] lg:justify-center lg:gap-10 lg:pt-0 2xl:w-[55%]">
          <SelectLanguage />
          <div className="fadeShow1 flex flex-col gap-6">
            <p className="text-3xl lg:text-4xl 2xl:text-4xl">
              {t("SignInYourAccount")}{" "}
            </p>
          </div>

          <div className="fadeShow2 flex w-full flex-col gap-4  text-black">
            <input
              onChange={(e) =>
                setInputsData({
                  email: e.target.value,
                  password: inputsData.password,
                })
              }
              type="text"
              className="rounded-lg border-2 border-transparent p-2 text-lg outline-none duration-150 focus-within:border-red-500  focus-within:shadow-[1px_10px_14px_rgba(0,0,0,1)] lg:text-xl"
              placeholder={t("EnterYourEmail")}
            />
            <input
              onChange={(e) =>
                setInputsData({
                  email: inputsData.email,
                  password: e.target.value,
                })
              }
              type="text"
              className="rounded-lg border-2 border-transparent p-2 text-lg outline-none duration-150 focus-within:border-red-500  focus-within:shadow-[1px_10px_14px_rgba(0,0,0,1)] lg:text-xl"
              placeholder={t("EnterYourPassword")}
            />
          </div>

          <div className="fadeShow3 flex w-full flex-col gap-4">
            <button className="w-full rounded-lg bg-red-500 py-2 text-xl text-white duration-200  hover:translate-y-[-0.2rem]  hover:bg-red-600 lg:py-3 lg:text-xl 2xl:text-2xl">
              {t("SignIn")}
            </button>
            <button className="w-full rounded-lg bg-red-500 py-2 text-xl text-white duration-200  hover:translate-y-[-0.2rem]  hover:bg-red-600 lg:py-3 lg:text-xl 2xl:text-2xl">
              {t("SignUpWithGoogle")}
            </button>
            <Link href={"signup"} className="w-max text-red-500">
              {t("CrateAccount")}
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden h-full overflow-hidden lg:block lg:w-[80%] 2xl:w-full">
        <Image
          width={2000}
          height={2000}
          src={Johnwick}
          alt="dsa"
          className="backgroundAnimation2 h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
export default SignIn;
