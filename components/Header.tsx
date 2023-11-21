import Image from "next/image";
import SelectLanguage from "./common/SelectLanguage";
import MovieCityLogo from "@/assets/MovieCityLogo.png";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="sticky top-0 z-[100] flex h-[4rem] w-full justify-between bg-black/80 p-3 lg:h-[5rem] lg:px-32">
      <div className="flex w-full items-center justify-start gap-3">
        <SelectLanguage />

        {/* <Link
          href={"signup"}
          className="rounded-lg border border-red-500 bg-black/80  px-2 py-2 lg:py-3"
        >
          <p className="text-white lg:cursor-pointer">{t("signUp")}</p>
        </Link> */}
      </div>
      <Image
        src={MovieCityLogo}
        className=" w-[8rem] lg:block  lg:w-[20rem]"
        alt="Landscape picture"
      />
    </div>
  );
};

export default Header;
