import Image from "next/image";
import SelectLanguage from "./common/SelectLanguage";
import MovieCityLogo from "@/assets/MovieCityLogo.png";
import SearchInput from "./SearchInput";
import MenuBurger from "./MenuBurger";
import SignupButton from "./SignupButton";

const Header = () => {
  return (
    <div className="  sticky top-0 z-[100] flex  h-[7rem] w-full flex-col items-center justify-between  gap-2 bg-black p-4 transition-all lg:h-[8rem]  lg:px-32">
      <div className="container flex flex-col items-center justify-between gap-2">
        <div className=" flex  w-full items-center justify-between">
          <MenuBurger />
          <p className="font-EstedadFont text-red-600 text-3xl italic">Movie City</p>
          {/* <Image
            src={MovieCityLogo}
            className=" h-full w-[9rem] lg:block lg:w-[20rem]"
            alt="Landscape picture"
          /> */}
          <SelectLanguage />
        </div>
        <div className="flex  w-full items-center justify-between">
          <SearchInput />
          <SignupButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
