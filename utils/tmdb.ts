import { MoviePropTypes } from "@/db";

const BASE = "https://api.themoviedb.org/3";
const IMG = "https://image.tmdb.org/t/p";

interface TmdbCast {
  name: string;
  profile_path: string | null;
}

interface TmdbCrew {
  name: string;
  job: string;
}

interface TmdbVideo {
  key: string;
  type: string;
  site: string;
}

interface TmdbGenre {
  id: number;
  name: string;
}

export interface TmdbMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  popularity: number;
  release_date: string;
  genres?: TmdbGenre[];
  credits?: { cast: TmdbCast[]; crew: TmdbCrew[] };
  videos?: { results: TmdbVideo[] };
}

function img(size: string, path: string | null): string {
  return path ? `${IMG}/${size}${path}` : "";
}

export function mapMovie(m: TmdbMovie): MoviePropTypes {
  const trailerKey = m.videos?.results.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  )?.key;
  const director = m.credits?.crew.find((c) => c.job === "Director")?.name;

  return {
    _id: m.id.toString(),
    movieName: m.title,
    description: m.overview,
    imageUrl: img("w500", m.poster_path),
    backgroundImageUrl: img("original", m.backdrop_path),
    homePageImageUrl: img("w780", m.backdrop_path),
    imdbScore: Math.round(m.vote_average * 10) / 10,
    popularity: Math.min(100, Math.round(m.vote_average * 10)),
    genre: m.genres?.[0]?.name ?? "",
    top: m.vote_average >= 7.5,
    ...(director ? { director } : {}),
    actors:
      m.credits?.cast.slice(0, 5).map((a) => ({
        name: a.name,
        imageUrl: img("w200", a.profile_path),
      })) ?? [],
    ...(trailerKey
      ? { trailer: `https://www.youtube.com/embed/${trailerKey}` }
      : {}),
    downloadLinks: [],
    comments: [],
  };
}

async function tmdbGet(path: string, params: Record<string, string> = {}) {
  const url = new URL(`${BASE}${path}`);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(`TMDB ${path} → ${res.status}`);
  return res.json();
}

export async function getPopularMovies(): Promise<MoviePropTypes[]> {
  const data = await tmdbGet("/movie/popular");
  return data.results.map(mapMovie);
}

export async function getTrendingMovies(): Promise<MoviePropTypes[]> {
  const data = await tmdbGet("/trending/movie/week");
  return data.results.slice(0, 6).map(mapMovie);
}

export async function getUpcomingMovies(): Promise<
  { movieName: string; imageUrl: string }[]
> {
  const data = await tmdbGet("/movie/upcoming");
  return data.results.slice(0, 7).map((m: TmdbMovie) => ({
    movieName: m.title,
    imageUrl: img("w500", m.poster_path),
  }));
}

export async function getMovieDetail(id: string): Promise<MoviePropTypes> {
  const data = await tmdbGet(`/movie/${id}`, {
    append_to_response: "credits,videos",
  });
  return mapMovie(data);
}

export async function getSimilarMovies(id: string): Promise<MoviePropTypes[]> {
  const data = await tmdbGet(`/movie/${id}/similar`);
  return data.results.slice(0, 8).map(mapMovie);
}

export async function searchMovies(query: string): Promise<MoviePropTypes[]> {
  const data = await tmdbGet("/search/movie", { query });
  return data.results.map(mapMovie);
}
