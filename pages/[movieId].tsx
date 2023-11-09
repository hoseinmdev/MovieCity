import Layout from "@/components/Layout";
import allMovies, { MoviePropTypes } from "@/db";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import ActorAvatar from "@/components/common/ActorAvatar";
import Comment from "@/components/Comment";
import Skeleton from "@/components/common/Skeleton";
import OtherMovies from "@/components/OtherMovies";
import { useRouter } from "next/router";
import DownloadBox from "@/components/DownloadBox";
import Image from "next/image";
const SingleMoviePage: React.FC<{ movieId: string }> = ({ movieId }) => {
  const [currentMovie, setCurrentMovie] = useState<
    MoviePropTypes | undefined
  >();
  const router = useRouter();
  useEffect(() => {
    setCurrentMovie(undefined);
    setTimeout(
      () => setCurrentMovie(allMovies?.find((movie) => movie.id === movieId)),
      500,
    );
  }, [movieId]);
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      {currentMovie ? (
        <div className="relative flex h-full w-full flex-col gap-8 overflow-hidden rounded-lg p-2 text-white">
          <div className="relative h-full w-full ">
            <div
              className="SinglePagebackgroundAnimation relative min-h-[22rem] w-full rounded-xl bg-cover brightness-75 transition duration-300 lg:min-h-[40rem]"
              style={{
                backgroundImage:
                  "url(" + `${currentMovie?.backgroundImageUrl}` + ")",
              }}
            >
              <div className="absolute bottom-0 h-[50%] w-[80%] scale-125 bg-stone-900/50 blur-3xl lg:w-[30%]"></div>
            </div>
            <div className=" absolute bottom-2 left-2 right-2 z-10 flex w-full items-end justify-start gap-3 text-white">
              <Image
                placeholder="blur"
                loading="lazy"
                blurDataURL={movieId}
                width={400}
                height={400}
                className="fadeShow max-w-[8rem] rounded-xl shadow-xl lg:max-w-[13rem]"
                src={currentMovie?.imageUrl}
                alt=""
              />
              <div className="fadeShow2 flex flex-col items-start justify-center gap-2">
                <p className="text-lg lg:text-2xl">
                  {t(currentMovie?.movieName || "")}
                </p>
                <p>{t(currentMovie?.genre || "")}</p>
                <p className="">
                  {t("director") + " : "} {currentMovie?.director}
                </p>
                <div className="flex items-center justify-center gap-2 pt-4">
                  <div className="flex flex-col items-center justify-center gap-1 text-white">
                    <div className="rounded-lg bg-red-500 px-2 py-1 text-2xl">
                      <AiFillHeart />
                    </div>
                    <p className="text-sm text-red-500">
                      {currentMovie?.popularity + "%"}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 text-white">
                    <div className="rounded-lg bg-yellow-500 px-2 py-1 text-2xl">
                      <AiFillStar />
                    </div>
                    <p className="text-sm text-yellow-500">
                      {"10 / " + currentMovie?.imdbScore}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="fadeShow3 text-white/80 lg:w-3/4">
            {t(currentMovie?.description || "")}
          </p>
          <p className="fadeShow3 flex items-center gap-2 text-sm text-yellow-500 lg:text-base">
            <BsFillBellFill />
            {t("RevisedSiteContent")}
          </p>

          <div className="fadeShow3 flex w-full flex-col gap-2 overflow-hidden lg:m-3 lg:w-1/2">
            <p className="text-white/80 lg:text-xl">
              {t("trailer") + " " + t(currentMovie?.movieName || "")}
            </p>
            <video
              controls
              className="h-[13rem] rounded-xl  object-cover object-left lg:h-[20rem] lg:w-[40rem] lg:border-x-2 lg:border-t-2 lg:border-indigo-400/50 lg:p-2 "
              poster={currentMovie?.backgroundImageUrl}
            >
              <source src={currentMovie.trailer} type="video/mp4"></source>
            </video>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl">
              {currentMovie.downloadLinks?.length !== 0
                ? t("downloadLinks")
                : t("noDownloadLink")}
            </p>
            <div className="flex w-full flex-col gap-2 ">
              {currentMovie.downloadLinks?.map((movie) => {
                return (
                  <DownloadBox
                    movieId={currentMovie.id}
                    link={movie.link}
                    quality={movie.quality}
                    size={movie.size}
                    key={movie.link}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-4">
            <p className="text-xl">{t("actors")}</p>
            <div className="flex items-center justify-center gap-4">
              {currentMovie?.actors?.map((item) => {
                return (
                  <ActorAvatar
                    key={item.imageUrl}
                    name={item.name}
                    imageUrl={item.imageUrl}
                  />
                );
              })}
            </div>
          </div>

          <OtherMovies allMovies={allMovies} />

          <div className="flex w-full flex-col items-start justify-center gap-4 lg:w-1/2">
            <p className="text-xl">{t("usersComments")}</p>
            {currentMovie.comments?.map((comment) => {
              return (
                <Comment
                  key={comment.sender}
                  sender={`${t(comment.sender)}`}
                  text={`${t(comment.text)}`}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <SkeletonLoading />
      )}
    </Layout>
  );
};

const SkeletonLoading = () => {
  return (
    <div className="flex flex-col gap-8">
      <Skeleton className="h-[20rem] w-full rounded-xl lg:h-[35rem]" />
      <div className="flex flex-col gap-3 lg:gap-4">
        <Skeleton className="h-5 w-full rounded-full lg:h-7" />
        <Skeleton className="h-5 w-[90%] rounded-full lg:h-7" />
        <Skeleton className="h-5 w-[80%] rounded-full lg:h-7" />
        <Skeleton className="h-5 w-[70%] rounded-full lg:h-7" />
      </div>
      <div className="flex flex-col gap-2 lg:gap-5">
        <Skeleton className="h-5 w-3/4 rounded-full lg:h-7 lg:w-[20%]" />
        <Skeleton className="h-[10rem] w-full rounded-lg lg:h-[15rem] lg:w-1/2" />
        <Skeleton className="h-5 w-3/4 rounded-full lg:hidden lg:h-7" />
        <Skeleton className="h-5 w-3/4 rounded-full lg:hidden lg:h-7" />
      </div>
    </div>
  );
};

export const getStaticPaths = () => {
  const paths = allMovies.map((movie) => {
    return { params: { movieId: `${movie.id}` } };
  });
  return {
    paths,
    fallback: false, // false or "blocking"
  };
};
export const getStaticProps = async (context: { params: any }) => {
  const { params } = context;
  return { props: { movieId: params.movieId } };
};

export default SingleMoviePage;
