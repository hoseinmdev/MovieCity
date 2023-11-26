import Image from "next/image";
import SelectLanguage from "./common/SelectLanguage";
import MovieCityLogo from "@/assets/MovieCityLogo.png";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHome, FaRegUser } from "react-icons/fa";
import { CiHome, CiMenuBurger } from "react-icons/ci";
import { MdLocalMovies } from "react-icons/md";
import { RiMovieFill } from "react-icons/ri";
import i18n from "@/i18n";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const { t } = useTranslation();
  // const [isLogin, setIsLogin] = useState(false);
  // useEffect(() => {
  //   const token = JSON.parse(localStorage.getItem("token") || "");
  //   if (token) setIsLogin(true);
  // }, []);

  const [customStyles, setCustomStyles] = useState({
    menu: "w-[0%]",
    menuImage: "h-full",
  });
  const menuBurgerHandler = () => {
    if (customStyles.menu === "w-full") {
      setCustomStyles({
        menu: "w-[0%]",
        menuImage: "h-full opacity-0",
      });
    } else {
      setCustomStyles({
        menu: "w-full",
        menuImage: "h-full",
      });
      setTimeout(() => {
        setCustomStyles({
          menu: "w-full",
          menuImage: "h-full",
        });
      }, 200);
    }
  };

  const menuOptions = [
    { name: "home", icon: <FaHome />, path: "/" },
    // { name: "movies", icon: <MdLocalMovies />, path: "/home" },
    // { name: "series", icon: <RiMovieFill />, path: "/home" },
  ];
  return (
    <div className=" sticky top-0 z-[100] flex h-[4rem] w-full items-center  justify-between bg-black p-4 transition-all lg:h-[5rem]  lg:px-32">
      <div onClick={menuBurgerHandler} className="text-2xl text-white lg:hidden">
        <CiMenuBurger />
      </div>

      <Image
        src={MovieCityLogo}
        className=" w-[9rem] lg:block h-full lg:w-[20rem]"
        alt="Landscape picture"
      />
      <SelectLanguage />
      {/* <div className="flex w-full items-center justify-start gap-3">

        <Link
          href={"signup"}
          className="rounded-lg border border-red-500  px-2 py-2 lg:py-3"
        >
          <p className="text-white lg:cursor-pointer">
            {isLogin ? <FaRegUser /> : t("signUp")}
          </p>
        </Link>
      </div> */}

      <div
        className={`${customStyles.menu} fixed ${
          i18n.dir() === "rtl" ? "right-0" : "left-0"
        } top-0 z-[100]  h-screen backdrop-blur-sm backdrop-brightness-75 transition-all duration-200`}
      >
        <div
          className={`${
            i18n.dir() === "rtl" ? "right-0" : "left-0"
          } top-0 flex h-screen w-[70%] flex-col items-center justify-between bg-black`}
        >
          <div
            className={`${customStyles.menuImage} relative w-full overflow-hidden duration-300`}
          >
            <Image
              alt=""
              src="https://image.winudf.com/v2/image1/Y29tLm1vYmVhc3lhcHAuYXBwOTA5MTkyMjQ1MjNfc2NyZWVuXzBfMTY3Njg0OTU1Ml8wMzA/screen-0.webp?fakeurl=1&type=.webp"
              width={1000}
              height={1000}
              quality={100}
              className="h-full w-full bg-cover object-cover object-right"
            />
            <div
              className={`absolute ${
                i18n.dir() === "rtl" ? "right-0" : "left-0"
              } top-0 flex w-full flex-col items-start justify-start gap-6 bg-black p-4 text-white duration-300`}
            >
              <div className="text-3xl text-red-500" onClick={menuBurgerHandler}>
                <IoMdClose />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-4">
                {menuOptions.map((item) => {
                  return (
                    <Link href={item.path}
                    onClick={menuBurgerHandler}
                      key={item.name}
                      className="flex w-full items-center justify-start gap-2 border-white/50 rounded-md p-2 border"
                    >
                      <div>{item.icon}</div>
                      <div>{t(item.name)}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Header;
