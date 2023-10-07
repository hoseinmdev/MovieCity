import Layout from "@/components/Layout";
import allMovies from "@/db";
import React from "react";
import { useTranslation } from "react-i18next";

const WatchRoom: React.FC<{ movieId: string }> = ({ movieId }) => {
  const currentMovie = allMovies?.find((movie) => movie.id === movieId);
  const { t, i18n } = useTranslation();

  console.log(currentMovie);
  return (
    <Layout>
      <div className="flex h-full w-full flex-col items-start justify-start gap-8 p-3 text-white lg:p-8">
        <p className="text-base text-white/80 lg:text-2xl">
          {t("welcomeToWatchRoom")}
        </p>
        <div className="flex w-full flex-col gap-6 overflow-hidden lg:m-3">
          <p className="text-white/80 lg:text-xl">
            {t(currentMovie?.movieName || "")}
          </p>
          <video
            controls
            className="relative h-[17rem]  rounded-xl object-cover object-left lg:h-[30rem] lg:w-full lg:border-x-2 lg:border-t-2 lg:border-stone-700 lg:p-2 "
            poster={currentMovie?.backgroundImageUrl}
          >
            <source
              src={currentMovie?.downloadLinks[1].link}
              type="video/mp4"
            ></source>
          </video>
          <p className="text-base text-white/80 lg:w-1/2">
            {t(currentMovie?.description || "")}
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default WatchRoom;

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
