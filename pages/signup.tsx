import React, { useEffect, useState } from "react";
import Johnwick from "@/assets/johnWick.jpg";
import Image from "next/image";
import SelectLanguage from "@/components/common/SelectLanguage";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp: React.FC = () => {
  interface InputsData {
    email: string;
    password: string;
  }
  const { t, i18n } = useTranslation();
  const [inputsData, setInputsData] = useState<InputsData>({
    email: "",
    password: "",
  });
  const [touchPosition, setTouchPosition] = useState<number | null>(0);
  const [customClass, setCustomClass] = useState({
    imageWidth: "translate-x-[0rem] opacity-100 w-full",
    formsWidth: "translate-x-[-50rem] lg:translate-x-[0rem]",
    textFade:"opacity-100"
  });
  const signUpUser = async () => {
    if (inputsData.email !== "" && inputsData.password !== "") {
      await axios
        .post(
          "https://silent-holy-mum.glitch.me/users",
          {
            id: new Date().getTime(),
            email: inputsData.email,
            password: inputsData.password,
          },
          { headers: { "Content-Type": "application/json" } },
        )
        .then((res) => {
          console.log(res);
          toast(t("welcome"), { theme: "dark", position: "top-center" });
        })
        .catch((rs) => {
          console.log(rs);
        });
    }
  };

  const onTouchStartHandler = (e: any) => {
    setTouchPosition(e.touches[0].clientY);
  };
  const onTouchMoveHandler = (e: any) => {
    if (touchPosition === null) return;
    const currentTouch = e.touches[0].clientY;
    const diff = touchPosition - currentTouch;
    if (diff > 5) {
      setCustomClass({
        imageWidth: "w-full blur-sm brightness-50",
        formsWidth: "w-[100%] translate-x-[0rem]",
        textFade: "opacity-0",
      });
    }
    // if (diff < -5)  console.log("down");
    setTouchPosition(null);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCustomClass({
  //       imageWidth: "",
  //       formsWidth: "w-[100%] translate-x-[0rem]",
  //     });
  //   }, 500);
  // }, []);
  return (
    <div
      className={` fadeShow relative flex h-screen w-full items-center justify-between bg-stone-900 text-white ${
        i18n.dir() === "rtl" ? "font-VazirFont" : "font-BlackListed"
      }`}
    >
      <div
        className={`h-full  ${customClass.imageWidth} absolute right-0 top-0 overflow-hidden duration-1000 lg:hidden`}
      >
        <Image
          width={2000}
          height={2000}
          onTouchStart={(e) => onTouchStartHandler(e)}
          onTouchMove={(e) => onTouchMoveHandler(e)}
          src="https://i.redd.it/mdphmi1pulf41.jpg"
          loading="lazy"
          placeholder="blur"
          blurDataURL="https://i.redd.it/mdphmi1pulf41.jpg"
          alt="background"
          className="relative h-full  w-full object-cover "
        />
        <p
          className={`absolute bottom-0 left-0 right-0 top-0 z-10 mb-auto ml-auto mr-auto mt-auto h-min w-full animate-bounce p-3 text-center text-5xl backdrop-blur-sm duration-1000 ${customClass.textFade}`}
        >
          {t("pullUp")}
        </p>
      </div>

      <div
        dir={i18n.dir()}
        className={`flex h-full items-center justify-center overflow-hidden duration-1000 lg:w-full ${customClass.formsWidth} z-[100]`}
      >
        <div className="relative flex h-full w-[80%] flex-col items-start justify-start  gap-10 pt-10 md:w-[60%] md:gap-4 lg:w-[70%] lg:justify-center lg:gap-10 lg:pt-0 2xl:w-[55%]">
          <SelectLanguage />
          <div className="fadeShow1 relative flex flex-col gap-6">
            <p className="text-xl lg:text-2xl">{t("StartforFree")}</p>
            <p className="text-3xl lg:text-4xl 2xl:text-5xl">
              {t("CreateAnAccount")}{" "}
            </p>
          </div>
          <div className="fadeShow2 flex w-full flex-col gap-4 text-black">
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
          <div className="fadeShow3 flex w-full flex-col gap-4 ">
            <button
              onClick={signUpUser}
              className="w-full rounded-lg bg-red-500 py-2 text-xl text-white duration-200  hover:translate-y-[-0.2rem]  hover:bg-red-600 lg:py-3 lg:text-xl 2xl:text-2xl"
            >
              {t("SignUp")}
            </button>
            <button className="w-full rounded-lg bg-red-500 py-2 text-xl text-white duration-200  hover:translate-y-[-0.2rem]  hover:bg-red-600 lg:py-3 lg:text-xl 2xl:text-2xl">
              {t("SignUpWithGoogle")}
            </button>
            <div className="flex gap-1 text-white/60">
              {t("AlreadyHaveAccount")}{" "}
              <Link href={"signin"} className="text-red-500">
                {t("SignIn")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden h-full overflow-hidden lg:block lg:w-[80%] 2xl:w-full">
        <Image
          width={2000}
          height={2000}
          src={Johnwick}
          loading="lazy"
          placeholder="blur"
          alt="dsa"
          className="backgroundAnimation2 h-full w-full object-cover"
        />
      </div>

      <ToastContainer bodyClassName={"font-VazirFont"} />
    </div>
  );
};
export default SignUp;
