import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";
import SelectLanguage from "@/components/common/SelectLanguage";
import { useTranslation } from "react-i18next";
import MovieCityLogo from "../assets//MovieCityLogo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {ImSpinner9} from "react-icons/im"
export default function Home() {
  const { i18n, t } = useTranslation();
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className="fadeShow flex h-screen w-full flex-col items-center justify-start gap-4 bg-black text-white"
      dir={i18n.dir()}
    >
      <div className="absolute top-5 z-[100] flex w-full justify-between bg-black/20 px-10 pb-4 lg:w-3/4">
        <SelectLanguage />
        <Image
          src={MovieCityLogo}
          className="w-36 lg:w-60"
          alt="Landscape picture"
        />
      </div>

      <div className="relative flex min-h-[75%] w-full items-center justify-center overflow-hidden bg-black lg:mt-8">
        <div
          className="backgroundAnimation absolute h-full w-full scale-110 brightness-75 lg:scale-100 lg:brightness-50 "
          style={{
            backgroundImage:
              "url(" +
              `https://news.xbox.com/en-us/wp-content/uploads/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png` +
              ")",
          }}
        ></div>
        <div className="fadeShow4 absolute bottom-0 left-0 right-0 top-0 z-10 mb-auto ml-auto mr-auto mt-auto  flex h-[45%]  w-full flex-col items-center justify-around bg-black/50 p-4 text-white shadow-2xl lg:h-[22rem] lg:bg-black/50 lg:p-8">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <p className="text-center text-2xl font-bold lg:text-4xl">
              {t("UnlimitedMoviesTitle")}
            </p>
            <p className="text-xl lg:text-xl"> {t("WatchAnywhereAnytime")}</p>
            <p className="text-xl lg:text-4xl">{t("ReadyToWatch")}</p>
          </div>
          <Link
            href="/home"
            onClick={() => setClicked(true)}
            className="w-[80%] cursor-default rounded-lg bg-red-600 p-2 text-center text-xl text-white transition duration-200 hover:translate-y-[-0.2rem] hover:scale-105 lg:w-[20%] lg:cursor-pointer lg:p-4"
          >
            {!clicked ? (
              `${t("GetStarted")}`
            ) : (
              <div className="flex w-full animate-spin justify-center">
                <ImSpinner9 />
              </div>
            )}
          </Link>
        </div>
      </div>

      <div className="min-h-2/4 flex w-full flex-col items-center justify-around bg-black p-8 text-center text-xl lg:flex-row">
        <div className="fadeShow2">
          <p className="pb-6 text-3xl font-bold lg:text-5xl ">
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
            className="absolute bottom-0 left-0 right-0 top-0 mb-auto ml-auto mr-auto mt-auto h-full w-[75%]"
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

      <div className="min-h-2/4 flex w-full flex-col items-center justify-around bg-black p-8 text-center text-xl lg:flex-row">
        <div className="relative order-1 lg:order-none ">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            className=" relative z-[100]"
          />
          <video
            className="absolute bottom-20 left-0 right-0 top-0 mb-auto ml-auto mr-auto mt-auto w-[65%]"
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
          <p className="pb-6 text-3xl font-bold lg:text-5xl">
            {t("WatchAnywhereAnytime")}
          </p>
          <p>{t("WatchAnywhereAnytimeDesc")}</p>
        </div>
      </div>

      <div className="min-h-2/4 flex w-full flex-col items-center justify-around bg-black p-8 text-center text-xl lg:flex-row">
        <div>
          <p className="pb-6 text-3xl font-bold lg:text-5xl">
            {t("ProfileForKids")}
          </p>
          <p>{t("ProfileForKidsDesc")}</p>
        </div>
        <img
          className="lg:h-auto lg:w-auto"
          src="https://occ-0-90-6.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
          alt=""
        />
      </div>

      <div className="min-h-2/4 flex w-full flex-col items-center justify-around bg-black p-8 text-center text-xl lg:flex-row">
        <div className="relative order-1 lg:order-none ">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            className=" relative z-[100]"
          />
          <video
            className="absolute bottom-20 left-0 right-0 top-0 mb-auto ml-auto mr-auto mt-auto w-[65%]"
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
          <p className="pb-6 text-3xl font-bold lg:text-5xl">
            {t("DownloadAndSeeOffline")}
          </p>
          <p>{t("DownloadAndSeeOfflineDesc")}</p>
        </div>
      </div>

      <div className="mt-10 flex w-full flex-col items-center justify-center gap-8 p-4 lg:w-[40%] lg:p-0">
        <p className="text-center text-2xl lg:text-3xl">
          {t("FrequentlyAskedQuestions")}
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-4">
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
