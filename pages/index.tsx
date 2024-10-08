import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";
import SelectLanguage from "@/components/common/SelectLanguage";
import { useTranslation } from "react-i18next";
import MovieCityLogo from "../assets//MovieCityLogo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import johnWick from "@/assets/johnWick.jpeg";
import johnWickMobile from "@/assets/johnWickMobile.jpg";
import Line from "@/components/common/Line";
import Button from "@/components/common/Button";
export default function Home() {
  const { i18n, t } = useTranslation();
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className="fadeShow flex w-full flex-col items-center justify-start gap-4 bg-black font-VazirFont text-white"
      dir={i18n.dir()}
    >
      <div className="absolute z-[100] flex w-full items-center justify-between bg-black/30 px-10 py-4 lg:w-3/4">
        <div>
          <SelectLanguage />
        </div>
        <Image
          src={MovieCityLogo}
          className="h-[2.5rem] w-[55%] lg:h-[3rem] lg:w-60"
          alt="Landscape picture"
        />
      </div>
      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
        <div className="absolute h-full w-full">
          <Image
            width={2000}
            height={2000}
            src="https://is.zobj.net/image-server/v1/images?r=wwsmP0x1aiPKPqH4Io0nQn2Frwfhdv59kN3vZsB9cFEQ2tqOuk1KamKsqPC4MK79hJ8SoqKsE2IRIlm4BHtx7wQPtXSZsMC_wtnxdbBLLWPOy1Jpu8WgBAsojiTUmHx4yuyT2Dk_GHdaAsQQSyQb6cz8KLULAhP8F-NKHaHoon6RISIqv9IpVhDp3_FwuFy8xkpucX-fBdR0ueGQMLY_23ceI6IbPL7g-Q4hOO1-i94UY0yLHLrcduak_vU"
            quality={100}
            alt=""
            className="h-full w-full bg-cover object-cover brightness-50 lg:hidden"
          />
          <Image
            width={2000}
            height={2000}
            quality={100}
            src="https://wallpapers.com/images/featured/money-heist-segtwbhffwy01w82.jpg"
            alt=""
            className="backgroundAnimation hidden  w-full brightness-50  lg:block"
          />
        </div>

        <div className="fadeShow4 absolute bottom-0 left-0 right-0 top-0 z-10 mb-auto ml-auto mr-auto mt-auto  flex h-[30%]  w-full flex-col items-center justify-around p-2  text-white backdrop-blur-[2px] backdrop-brightness-75 lg:h-[22rem] lg:p-8 lg:shadow-2xl">
          <div className="flex w-full flex-col items-center justify-center gap-3 lg:gap-4">
            <p className="text-center font-EstedadFont text-xl font-bold lg:text-4xl">
              {t("UnlimitedMoviesTitle")}
            </p>
            <p className="text-xl lg:text-xl"> {t("WatchAnywhereAnytime")}</p>
            <p className="text-xl lg:text-4xl">{t("ReadyToWatch")}</p>
          </div>
          <Link href="/home" onClick={() => setClicked(true)}>
            <Button isLoading={clicked} type="primary" className="!text-3xl animate-bounce !p-4 !px-20">
              {t("GetStarted")}
            </Button>
          </Link>
          {/* <Image
            width={350}
            height={350}
            quality={100}
            src="https://user-images.githubusercontent.com/9122190/28998409-c5bf7362-7a00-11e7-9b63-db56694522e7.png"
            alt=""
            className="scale-[0.5] lg:scale-[0.55] cursor-pointer"
          /> */}
        </div>
      </div>

      <div className="min-h-2/4 flex w-full flex-col items-center justify-around  bg-black p-8 text-center text-xl lg:flex-row ">
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
      <Line />

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
      <Line />

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
      <Line />

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
      <Line />

      <div className="mt-5 flex w-full flex-col items-center justify-center gap-8 bg-black p-4 lg:w-[40%] lg:p-0">
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
