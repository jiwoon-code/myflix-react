const API_KEY = "0965d7f12577a4a569c99db441d7df47";
const BASE_PATH = "https://api.themoviedb.org/3/";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

interface ITopRated {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
}
export interface ITopRatedResult {
  page: number;
  results: ITopRated[];
  total_pages: number;
  total_results: number;
}

interface IUpComming {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}
export interface IUpCommingResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IUpComming[];
  total_pages: number;
  total_results: number;
}

interface ITvShow {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}
export interface ITvShowResult {
  page: number;
  results: ITvShow[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getTvShows() {
  return fetch(`${BASE_PATH}/tv/on_the_air?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getTopRated() {
  return fetch(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getUpComming() {
  return fetch(`${BASE_PATH}/movie/upcoming?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export async function getSearchResult({
  keyword,
  category,
  page,
}: {
  keyword: string | null;
  category: string;
  page: number;
}) {
  return (
    await fetch(
      `${BASE_PATH}/search/${category}?api_key=${API_KEY}&language=en-US&query=${keyword}&page=${page}`
    )
  ).json();
}
