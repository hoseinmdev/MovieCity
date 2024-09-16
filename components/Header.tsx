import Image from "next/image";
import SelectLanguage from "./common/SelectLanguage";
import MovieCityLogo from "@/assets/MovieCityLogo.png";
import SearchInput from "./SearchInput";
import MenuBurger from "./MenuBurger";
import SignupButton from "./SignupButton";
import { useEffect, useState } from "react";
import createConditionalClass from "@/utils/createConditionalClass";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScrollY(window.scrollY);
    });
  }, [scrollY]);

  return (
    <div
      className={createConditionalClass(
        "sticky top-0 z-[100] flex  h-[7rem] w-full flex-col items-center justify-between gap-2 bg-black/50 p-4 backdrop-blur-md transition-all lg:h-[8rem]  lg:px-32",
        { "!bg-neutral-700/50": scrollY > 300 },
      )}
    >
      <div className="container flex flex-col items-center justify-between gap-2">
        <div className=" flex  w-full items-center justify-between">
          <MenuBurger />
          <p className="font-EstedadFont text-3xl italic text-primary">
            Movie City
          </p>
          {/* <Image
            src={MovieCityLogo}
            className=" h-full w-[9rem] lg:block lg:w-[20rem]"
            alt="Landscape picture"
          /> */}
          <SelectLanguage />
        </div>
        <div className="flex  w-full items-center justify-between gap-3">
          <SearchInput />
          <SignupButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
