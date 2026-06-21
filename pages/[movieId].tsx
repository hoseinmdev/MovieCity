import Layout from "@/components/Layout";
import { MoviePropTypes } from "@/db";
import { useTranslation } from "react-i18next";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import ActorAvatar from "@/components/common/ActorAvatar";
import Comment from "@/components/Comment";
import CommentForm from "@/components/CommentForm";
import Skeleton from "@/components/common/Skeleton";
import OtherMovies from "@/components/OtherMovies";
import DownloadBox from "@/components/DownloadBox";
import Image from "next/image";
import Line from "@/components/common/Line";
import { getMovieDetail, getSimilarMovies } from "@/utils/tmdb";
import { getComments, CommentData } from "@/utils/comments";
import { useEffect, useState, useCallback } from "react";

const SingleMoviePage: React.FC<{
  movie: MoviePropTypes;
  movies: MoviePropTypes[];
}> = ({ movie, movies }) => {
  const { t } = useTranslation();
  const [comments, setComments] = useState<CommentData[]>([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  const fetchComments = useCallback(async () => {
    if (!movie?._id) return;
    setCommentsLoading(true);
    try {
      const data = await getComments(movie._id);
      setComments(data);
    } finally {
      setCommentsLoading(false);
    }
  }, [movie?._id]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);
  return (
    <Layout>
      {movie ? (
        <div className="container relative ml-auto mr-auto flex h-full w-full flex-col gap-8 overflow-hidden rounded-lg text-white">
          <div className="fadeShow relative h-full w-full lg:p-2">
            <div className="w-full overflow-hidden rounded-xl lg:max-h-[40rem] ">
              <div
                className="SinglePagebackgroundAnimation relative min-h-[22rem] w-full rounded-xl bg-cover brightness-75 transition duration-300 lg:min-h-[40rem]"
                style={{
                  backgroundImage:
                    "url(" + `${movie?.backgroundImageUrl}` + ")",
                }}
              >
                <div className="absolute bottom-0 h-[50%] w-[80%] scale-125 bg-surface/50 blur-3xl lg:w-[30%]"></div>
              </div>
            </div>
            <div className=" absolute bottom-1 left-1 right-2 z-10 flex w-full items-end justify-start gap-3 text-white lg:bottom-3 lg:left-3 lg:right-3 lg:h-72">
              <Image
                width={400}
                height={400}
                className="fadeShow max-w-[8rem] rounded-xl shadow-xl lg:max-w-[13rem]"
                src={movie?.imageUrl}
                alt=""
              />
              <div className="fadeShow2 flex h-full flex-col items-start justify-between gap-2">
                <p className="w-[97%] font-EstedadFont  text-lg lg:text-2xl">
                  {movie?.movieName}
                </p>
                <p>{movie?.genre}</p>
                <div className="flex items-center justify-center gap-2 pt-4">
                  <div className="flex flex-col items-center justify-center gap-1 text-white">
                    <div className="rounded-lg bg-primary px-2 py-1 text-2xl">
                      <AiFillHeart />
                    </div>
                    <p className="text-sm text-primary">
                      {movie?.popularity + "%"}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 text-white">
                    <div className="rounded-lg bg-gold px-2 py-1 text-2xl">
                      <AiFillStar />
                    </div>
                    <p className="text-sm text-gold">
                      {"10 / " + movie?.imdbScore}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line />
          <p className="fadeShow3 p-2 text-white/80 lg:w-3/4">
            {movie?.description}
          </p>
          <p className="fadeShow3 flex items-center gap-2 p-2 font-EstedadFont text-sm text-gold lg:text-base">
            <BsFillBellFill />
            {t("RevisedSiteContent")}
          </p>

          <div className="fadeShow3 flex w-full flex-col gap-2 overflow-hidden p-2 lg:m-3">
            <p className="text-white/80 lg:text-xl">
              {t("trailer") + " " + movie?.movieName}
            </p>
            {movie.trailer ? (
              <iframe
                src={movie.trailer}
                className="aspect-video w-full rounded-xl "
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <p className="text-white/50">{t("noDownloadLink")}</p>
            )}
          </div>

          <div className="flex flex-col gap-4 p-2">
            <p className="font-EstedadFont text-xl">
              {movie.downloadLinks?.length !== 0
                ? t("downloadLinks")
                : t("noDownloadLink")}
            </p>
            <div className="flex w-full flex-col gap-2 ">
              {movie.downloadLinks?.map((item) => {
                return (
                  <DownloadBox
                    movieId={movie._id}
                    link={item.link}
                    quality={item.quality}
                    size={item.size}
                    key={item.link}
                  />
                );
              })}
            </div>
          </div>
          <Line />

          <div className="flex flex-col items-start justify-center gap-4 p-2">
            <p className="font-EstedadFont text-xl">{t("actors")}</p>
            <div className="flex items-center justify-center gap-4">
              {movie?.actors?.map((item) => {
                return (
                  <ActorAvatar
                    key={item.name}
                    name={item.name}
                    imageUrl={item.imageUrl}
                  />
                );
              })}
            </div>
          </div>

          <div className="p-2">
            <OtherMovies allMovies={movies} />
          </div>
          <Line />

          <div className="flex w-full flex-col items-start justify-center gap-4 lg:w-1/2">
            <p className="font-EstedadFont text-xl">{t("usersComments")}</p>
            <CommentForm movieId={movie._id} onCommentAdded={fetchComments} />
            {commentsLoading ? (
              <div className="flex w-full flex-col gap-3">
                <Skeleton className="h-16 w-full rounded-xl" />
                <Skeleton className="h-16 w-full rounded-xl" />
              </div>
            ) : comments.length === 0 ? (
              <p className="text-white/40">{t("noComments")}</p>
            ) : (
              comments.map((comment) => (
                <Comment
                  key={comment.id}
                  sender={comment.sender}
                  text={comment.text}
                />
              ))
            )}
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
    <div className="fadeShow container ml-auto mr-auto flex flex-col gap-8 p-2">
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

export const getServerSideProps = async (context: any) => {
  try {
    const id = context.params.movieId as string;
    const [movie, movies] = await Promise.all([
      getMovieDetail(id),
      getSimilarMovies(id),
    ]);
    return { props: { movie, movies } };
  } catch {
    return { notFound: true };
  }
};

export default SingleMoviePage;
