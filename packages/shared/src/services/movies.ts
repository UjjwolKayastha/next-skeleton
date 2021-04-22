import { API } from "../api";

import { API_URL, POPULAR_BASE_URL, API_KEY } from "../config";
import { IPopularMovies } from "../interfaces/movie";

const getPopularMovies = async () => {
  const response: IPopularMovies = await API.get(POPULAR_BASE_URL);
  if (response) {
    return response;
  }
};

const getMovieById = async (movieId: number) => {
  const response = await API.get(
    `${API_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  if (response) {
    return response;
  }
};

const getMovieCredits = async (movieId: number) => {
  const response = await API.get(
    `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  if (response) {
    return response;
  }
};

export const movieService = {
  getPopularMovies,
  getMovieById,
  getMovieCredits,
};
