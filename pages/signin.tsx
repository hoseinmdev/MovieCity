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
      className={` fadeShow relative flex h-screen w-full items-center justify-between bg-background text-white  ${
        i18n.dir() === "rtl" ? "font-VazirFont" : "font-BlackListed"
      }`}
    >
      <div
        dir={i18n.dir()}
        className="relative z-10 flex h-full w-full items-center justify-center "
      >
        <div className="glass-strong relative flex h-fit w-[90%] flex-col items-start justify-start gap-8 rounded-2xl p-8 md:w-[60%] lg:w-[70%] lg:gap-10 2xl:w-[45%]">
          <SelectLanguage />
          {/* <div className="fadeShow1 flex flex-col gap-6">
            <p className="text-3xl lg:text-4xl 2xl:text-4xl">
              {t("SignInYourAccount")}{" "}
            </p>
          </div> */}

          <div className="fadeShow2 flex w-full flex-col gap-4">
            <input
              onChange={(e) =>
                setInputsData({
                  email: e.target.value,
                  password: inputsData.password,
                })
              }
              type="text"
              className="glass w-full rounded-lg p-3 text-lg text-white outline-none duration-150 placeholder:text-white/40 focus-within:border-primary lg:text-xl"
              placeholder={t("EnterYourEmail")}
            />
            <input
              onChange={(e) =>
                setInputsData({
                  email: inputsData.email,
                  password: e.target.value,
                })
              }
              type="password"
              className="glass w-full rounded-lg p-3 text-lg text-white outline-none duration-150 placeholder:text-white/40 focus-within:border-primary lg:text-xl"
              placeholder={t("EnterYourPassword")}
            />
          </div>

          <div className="fadeShow3 flex w-full flex-col gap-4">
            <button className="glow-primary-sm w-full rounded-lg bg-primary py-2 text-xl text-white duration-200  hover:translate-y-[-0.2rem]  hover:bg-primaryHover lg:py-3 lg:text-xl 2xl:text-2xl">
              {t("SignIn")}
            </button>
            <button className="glass glass-hover w-full rounded-lg py-2 text-xl text-white duration-200  hover:translate-y-[-0.2rem] lg:py-3 lg:text-xl 2xl:text-2xl">
              {t("SignUpWithGoogle")}
            </button>
            <Link href={"signup"} className="w-max text-primary">
              {t("CrateAccount")}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 h-full overflow-hidden lg:block">
        <Image
          width={2000}
          height={2000}
          src={Johnwick}
          alt="dsa"
          className="backgroundAnimation2 h-full w-full object-cover brightness-[0.35]"
        />
      </div>
    </div>
  );
};
export default SignIn;
