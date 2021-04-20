export interface Movie {
  adult?: boolean;
  original_title: string;
  title?: string;
  vote_average: number;
  original_language?: string;
  genre?: string | string[];
  id?: number;
  overview: string;
  poster_path?: string;
  backdrop_path: string;
  vote_count?: number;
  release_date?: string;
}

export interface IPopularMovies {
  page?: number;
  results?: Movie[];
  total_pages?: number;
  total_results?: number;
}
