export interface Movie {
  adult?: boolean;
  original_title?: string;
  title?: string;
  vote_average?: number;
  original_language?: string;
  genre?: string | string[];
  id?: number;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
  vote_count?: number;
  release_date?: string;
  runtime?: number;
  budget?: number;
  spoken_languages?: [
    {
      name: string;
    }
  ];
  revenue?: number;
  directors?: Crew[];
}

interface Cast {
  cast_id?: number;
  character?: string;
  credit_id?: string;
  gender?: number;
  original_name?: string;
  profile_path?: string;
  id?: number;
  known_for_department?: string;
  adult?: boolean;
  name?: string;
}

interface Crew {
  cast_id?: number;
  department?: string;
  credit_id?: string;
  gender?: number;
  adult?: boolean;
  original_name?: string;
  profile_path?: string;
  id?: number;
  known_for_departmen?: string;
  job?: string;
  name?: string;
}
export interface Credits {
  cast?: Cast[];
  crew?: Crew[];
  id?: number;
}

export interface IPopularMovies {
  page?: number;
  results?: Movie[];
  total_pages?: number;
  total_results?: number;
}
