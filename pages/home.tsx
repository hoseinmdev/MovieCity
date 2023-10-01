import TopMoviesContainer from "@/components/TopMoviesContainer";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import allMovies, { MoviePropTypes } from "@/db";
import Skeleton from "@/components/common/Skeleton";
import Layout from "@/components/Layout";
import MoviesContainer from "@/components/MoviesContainer";
import ComingSoonMovies from "@/components/ComingSoonMovies";

const HomePage: React.FC<{ allMovies: MoviePropTypes[] }> = ({ allMovies }) => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState<MoviePropTypes[]>([]);
  useEffect(() => {
    setData(allMovies);
  }, []);

  const renderContent = () => {
    return (
      <Layout>
        <div className="flex flex-col gap-10">
          <TopMoviesContainer data={data} />
          <div className="flex w-full items-start justify-between gap-4">
            <div className="flex w-full flex-col gap-4 text-white">
              <p className="pr-4 text-xl">{t("lastestMovies")}</p>
              <MoviesContainer data={data} />
            </div>
            <ComingSoonMovies />
          </div>
        </div>
      </Layout>
    );
  };
  return <div>{data.length !== 0 ? renderContent() : <HomePageLoading />}</div>;
};

const HomePageLoading = () => {
  return (
    <div className=" container ml-auto mr-auto mt-2 flex flex-col items-center justify-center gap-8 p-4 ">
      <div className="flex w-full flex-col items-center gap-4 lg:grid lg:grid-cols-4">
        <Skeleton className="h-6 w-1/2 self-end rounded-full lg:hidden" />
        <Skeleton className="lg:w-86 h-32 w-full rounded-lg lg:h-44" />
        <Skeleton className="lg:w-86 h-32 w-full rounded-lg lg:h-44" />
        <Skeleton className=" lg:w-86 h-32 w-full rounded-lg lg:h-44" />
        <Skeleton className="w-86 hidden h-44 rounded-lg lg:block" />
        <Skeleton className="w-86 hidden h-44 rounded-lg lg:block" />
        <Skeleton className="w-86 hidden h-44 rounded-lg lg:block" />
        <Skeleton className="w-86 hidden h-44 rounded-lg lg:block" />
        <Skeleton className="w-86 hidden h-44 rounded-lg lg:block" />
      </div>
      <div className="flex w-full items-start justify-between gap-6">
        <div className="hidden w-3/4 flex-col gap-6 lg:flex">
          <Skeleton className="h-36 w-full rounded-md" />
          <Skeleton className="h-36 w-full rounded-md" />
          <Skeleton className="h-36 w-full rounded-md" />
          <Skeleton className="h-36 w-full rounded-md" />
          <Skeleton className="h-36 w-full rounded-md" />
          <Skeleton className="h-36 w-full rounded-md" />
        </div>
        <div className=" hidden w-full flex-col gap-4 lg:flex">
          <Skeleton className="h-80 w-full rounded-lg" />
          <Skeleton className="h-80 w-full rounded-lg" />
          <Skeleton className="h-80 w-full rounded-lg" />
        </div>
        <div className="flex w-full flex-col gap-4">
          <Skeleton className="h-72 w-full rounded-lg lg:h-80" />
          <Skeleton className="h-72 w-full rounded-lg lg:h-80" />
          <Skeleton className="h-72 w-full rounded-lg lg:h-80" />
        </div>
      </div>
    </div>
  );
};
export default HomePage;

export const getStaticProps = async () => {
  return { props: { allMovies } };
};
