import i18n from "@/i18n";
import { t } from "i18next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdDomain } from "react-icons/md";
const MenuBurger: React.FC = () => {
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
    { name: "mainPage", icon: <MdDomain />, path: "/" },
    { name: "home", icon: <FaHome />, path: "/home" },
    // { name: "movies", icon: <MdLocalMovies />, path: "/home" },
    // { name: "series", icon: <RiMovieFill />, path: "/home" },
  ];
  return (
    <>
      <div
        onClick={menuBurgerHandler}
        className="text-2xl text-white lg:hidden"
      >
        <CiMenuBurger />
      </div>
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
              <div
                className="text-3xl text-red-500"
                onClick={menuBurgerHandler}
              >
                <IoMdClose />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-4">
                {menuOptions.map((item) => {
                  return (
                    <Link
                      href={item.path}
                      onClick={menuBurgerHandler}
                      key={item.name}
                      className={`flex w-full items-center justify-start gap-2 ${
                        i18n.dir() === "rtl"
                          ? "rounded-r-lg rounded-l-3xl"
                          : "rounded-l-lg rounded-r-3xl"
                      } border-2 border-white/50 p-2 text-white/70`}
                    >
                      <div className="text-red-500">{item.icon}</div>
                      <div>{t(item.name)}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuBurger;
