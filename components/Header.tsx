import Image from "next/image";
import SelectLanguage from "./common/SelectLanguage";
import MovieCityLogo from "@/assets/MovieCityLogo.png";

const Header = () => {
  return (
    <div className="sticky top-0 z-[100] flex w-full justify-between bg-black/80 p-4 lg:px-32 pb-4">
      <SelectLanguage />
      <Image
        src={MovieCityLogo}
        className="w-28 h-10 lg:h-auto lg:w-60"
        alt="Landscape picture"
      />
    </div>
  );
};

export default Header;
