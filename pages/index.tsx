import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";
import SelectLanguage from "@/components/common/SelectLanguage";
import { useTranslation } from "react-i18next";
import MovieCityLogo from "../assets//MovieCityLogo.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { i18n, t } = useTranslation();

  return (
    <div
      className="w-full h-screen flex flex-col gap-4 justify-start items-center text-white bg-black"
      dir={i18n.dir()}
    >
      <div className="absolute z-[100] w-full lg:w-3/4 flex justify-between top-5 px-10 bg-black/20 pb-4">
        <SelectLanguage />
        <Image
          src={MovieCityLogo}
          className="lg:w-60 w-36"
          alt="Landscape picture"
        />
      </div>

      <div className="w-full min-h-full lg:mt-8 flex justify-center items-center overflow-hidden relative bg-black">
        <div
          className="absolute h-full w-full backgroundAnimation brightness-75 lg:brightness-50"
          style={{
            backgroundImage:
              "url(" +
              `https://news.xbox.com/en-us/wp-content/uploads/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png` +
              ")",
          }}
        ></div>
        <div className=" p-4 lg:p-8 absolute z-10 ml-auto mr-auto right-0 left-0 bg-black/50 lg:bg-black/80  w-full h-[45%]  lg:h-[22rem] mt-auto mb-auto top-0 bottom-20 shadow-2xl flex flex-col justify-around items-center text-white">
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <p className="text-2xl text-center lg:text-4xl font-bold">
              {t("UnlimitedMoviesTitle")}
            </p>
            <p className="text-xl lg:text-xl"> {t("WatchAnywhereAnytime")}</p>
            <p className="text-xl lg:text-4xl">{t("ReadyToWatch")}</p>
          </div>
          <Link
            href="/home"
            className="w-[80%] lg:w-[20%] bg-red-600 lg:cursor-pointer cursor-default text-center text-white lg:p-4 p-2 rounded-lg text-xl hover:translate-y-[-0.2rem] transition duration-200 hover:scale-105"
          >
            {t("GetStarted")}
          </Link>
        </div>
      </div>

      <div className="w-full min-h-2/4 flex flex-col lg:flex-row justify-around items-center p-8 bg-black text-center text-xl">
        <div>
          <p className="text-3xl lg:text-5xl font-bold pb-6">
            {t("EnjoyOnYourTv")}
          </p>
          <p>{t("EnjoyOnYourTvDesc")}</p>
        </div>
        <div className="relative">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            className=" relative z-[100]"
          />
          <video
            className="w-[75%] h-full absolute ml-auto mr-auto right-0 left-0 top-0 bottom-0 mb-auto mt-auto"
            autoPlay
            loop
            playsInline
            muted
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="w-full min-h-2/4 flex flex-col lg:flex-row justify-around items-center p-8 bg-black text-center text-xl">
        <div className="relative order-1 lg:order-none ">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            className=" relative z-[100]"
          />
          <video
            className="w-[65%] absolute ml-auto mr-auto right-0 left-0 top-0 bottom-20 mb-auto mt-auto"
            autoPlay
            loop
            playsInline
            muted
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <p className="text-3xl lg:text-5xl font-bold pb-6">
            {t("WatchAnywhereAnytime")}
          </p>
          <p>{t("WatchAnywhereAnytimeDesc")}</p>
        </div>
      </div>

      <div className="w-full min-h-2/4 flex flex-col lg:flex-row justify-around items-center p-8 bg-black text-center text-xl">
        <div>
          <p className="text-3xl lg:text-5xl font-bold pb-6">
            {t("ProfileForKids")}
          </p>
          <p>{t("ProfileForKidsDesc")}</p>
        </div>
        <img
          className="lg:w-auto lg:h-auto"
          src="https://occ-0-90-6.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
          alt=""
        />
      </div>

      <div className="w-full min-h-2/4 flex flex-col lg:flex-row justify-around items-center p-8 bg-black text-center text-xl">
        <div className="relative order-1 lg:order-none ">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            className=" relative z-[100]"
          />
          <video
            className="w-[65%] absolute ml-auto mr-auto right-0 left-0 top-0 bottom-20 mb-auto mt-auto"
            autoPlay
            loop
            playsInline
            muted
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <p className="text-3xl lg:text-5xl font-bold pb-6">
            {t("DownloadAndSeeOffline")}
          </p>
          <p>{t("DownloadAndSeeOfflineDesc")}</p>
        </div>
      </div>

      <div className="w-full p-4 lg:p-0 lg:w-[40%] flex flex-col justify-center items-center gap-8 mt-10">
        <p className="text-2xl lg:text-3xl text-center">
          {t("FrequentlyAskedQuestions")}
        </p>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <Accordion title={`${t("AboutMovieCity")}`}>
            <p>{t("AboutMovieCityDesc")}</p>
          </Accordion>
          <Accordion title={`${t("WhereCanIWatch")}`}>
            <p>{t("WhereCanIWatchDesc")}</p>
          </Accordion>
          <Accordion title={`${t("IsMovieCityGoodForKids")}`}>
            <p>{t("IsMovieCityGoodForKidsDesc")}</p>
          </Accordion>
        </div>
      </div>

      <Footer />
    </div>
  );
}
