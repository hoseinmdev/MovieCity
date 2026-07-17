import React, { useState } from "react";
import Image from "next/image";

const SIGNUP_BG =
  "https://assets-prd.ignimgs.com/2025/03/18/ballerina-blogroll-1742318298042.jpg";
import SelectLanguage from "@/components/common/SelectLanguage";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { ImSpinner9 } from "react-icons/im";
import * as Yup from "yup";
import { UseFormReset, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/common/Button";

const SignUp: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [clicked, setClicked] = useState(false);
  const routes = useRouter();

  const yup = Yup.string();
  const schema = Yup.object({
    email: yup.min(1, t("emailIsRequired")).email(t("emailIsNotTrue")),
    password: yup.min(1, t("EnterYourPassword")),
  });

  type FormData = Yup.InferType<typeof schema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    const uniqueId = new Date().getTime();
    reset();
    setClicked(true);
    await axios
      .post(
        "https://silent-holy-mum.glitch.me/users",
        {
          id: uniqueId,
          email: data.email,
          password: data.password,
        },
        { headers: { "Content-Type": "application/json" } },
      )
      .then((res) => {
        toast(t("welcome"), { theme: "dark", position: "top-center" });
        setClicked(false);
        routes.push("/home");
        localStorage.setItem("token", JSON.stringify(uniqueId));
      })
      .catch((rs) => {
        toast.error(t("tryAgain"), {
          theme: "dark",
          position: "top-center",
        });
        setClicked(false);
      });
  };

  return (
    <div
      className={` fadeShow relative flex h-screen w-full items-center justify-center bg-background text-white ${
        i18n.dir() === "rtl" ? "font-VazirFont" : "font-BlackListed"
      }`}
    >
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Image
          width={2000}
          height={2000}
          src={SIGNUP_BG}
          loading="lazy"
          quality={100}
          alt=""
          className="backgroundAnimation2 h-full w-full object-cover brightness-[0.35]"
        />
      </div>

      <div
        dir={i18n.dir()}
        className="relative z-10 flex h-full items-center justify-center"
      >
        <div className="glass-strong relative flex h-fit w-[90%] flex-col items-start justify-center gap-8 rounded-2xl p-8 md:w-[60%] lg:w-[70%] lg:gap-10 2xl:w-[45%]">
          <SelectLanguage reset={reset} />
          <div className="fadeShow1 relative flex flex-col gap-6">
            <p className="text-xl lg:text-2xl">{t("StartforFree")}</p>
            <p className="text-3xl lg:text-4xl 2xl:text-5xl">
              {t("CreateAnAccount")}{" "}
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`fadeShow2 flex w-full flex-col gap-3 lg:gap-4 `}
          >
            <input
              {...register("email", { required: "Email Address is required" })}
              type="text"
              className="glass w-full rounded-lg p-3 !font-VazirFont text-white outline-none duration-150 placeholder:text-white/40 focus-within:border-primary lg:text-xl"
              placeholder={t("EnterYourEmail")}
            />
            {errors.email && (
              <p
                className="rounded-md px-1 font-VazirFont text-primary  backdrop-blur-sm"
                role="alert"
              >
                {errors.email.message}
              </p>
            )}

            <input
              {...register("password", {
                required: "Email Address is required",
              })}
              type="password"
              className="glass w-full rounded-lg p-3 !font-VazirFont text-white outline-none duration-150 placeholder:text-white/40 focus-within:border-primary lg:text-xl"
              placeholder={t("EnterYourPassword")}
            />
            {errors.password && (
              <p
                className="rounded-md px-1 font-VazirFont text-primary  backdrop-blur-sm"
                role="alert"
              >
                {errors.password.message}
              </p>
            )}
            <div className="fadeShow3 mt-10 flex w-full flex-col gap-4">
              <Button
                isLoading={clicked}
                type="primary"
                className="w-full rounded-lg py-2 text-xl text-white duration-200  hover:translate-y-[-0.2rem]  lg:py-3 lg:text-xl 2xl:text-2xl"
              >
                {t("SignUp")}
              </Button>

              {/* <div className="flex gap-1 text-white/60">
                {t("AlreadyHaveAccount")}{" "}
                <Link href={"signin"} className="text-primary">
                  {t("SignIn")}
                </Link>
              </div> */}
            </div>
          </form>
        </div>
      </div>

      <ToastContainer bodyClassName={"font-VazirFont"} />
    </div>
  );
};
export default SignUp;
