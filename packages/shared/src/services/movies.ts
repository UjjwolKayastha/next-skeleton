import { API } from "../api";

import { POPULAR_BASE_URL } from "../config";
import { IPopularMovies } from "../interfaces/movie";

const getPopularMovies = async () => {
  const response: IPopularMovies = await API.get(POPULAR_BASE_URL);
  if (response) {
    return response;
  }
};

export const movieService = {
  getPopularMovies,
};
