import { API } from "../api";

import { API_URL, SEARCH_BASE_URL, POPULAR_BASE_URL, API_KEY } from "../config";
import { Credits, IPopularMovies, Movie } from "../interfaces/movie";
import { QueryFunction } from "react-query";

interface getMoviesProps {
  results?: Movie[];
  page?: number;
  total_pages?: number;
}

const getMovies: QueryFunction<getMoviesProps | undefined> = async (
  context
) => {
  const [, searchTerm] = context.queryKey;
  let endpoint: string = searchTerm
    ? `${SEARCH_BASE_URL}${searchTerm}&page=${context.pageParam}`
    : `${POPULAR_BASE_URL}&page=${context.pageParam}`;

  const response = await API.get(endpoint);

  if (response) {
    return response as getMoviesProps;
  }
};

const getMovieById = async (
  movieId: number
): Promise<(Movie & Credits) | undefined> => {
  const movieResponse = (await API.get(
    `${API_URL}movie/${movieId}?api_key=${API_KEY}`
  )) as Movie;

  const creditResponse = (await API.get(
    `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  )) as Credits;

  const {
    backdrop_path,
    id,
    original_title,
    vote_average,
    title,
    release_date,
    poster_path,
    runtime,
    budget,
    revenue,
    spoken_languages,
    overview,
  } = movieResponse;

  const directors = creditResponse.crew?.filter(
    (member) => member.job === "Director"
  );

  if (movieResponse && creditResponse) {
    return {
      backdrop_path,
      id,
      original_title,
      vote_average,
      title,
      release_date,
      poster_path,
      crew: directors,
      cast: creditResponse.cast,
      runtime,
      budget,
      revenue,
      spoken_languages,
      overview,
    };
  } else {
    return undefined;
  }
};

export const movieService = {
  getMovies,
  getMovieById,
};
