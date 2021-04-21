import { useQuery } from "react-query";
import { Card, Image } from "semantic-ui-react";
import {
  movieService,
  MovieCard,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  HomeCover,
  GlobalStyle,
} from "shared";

export default function Home() {
  const { data: popularMovies, isLoading } = useQuery(
    ["getPopularMovies"],
    movieService.getPopularMovies
  );

  return (
    <>
      {popularMovies && (
        <HomeCover
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${popularMovies.results[0].backdrop_path}`}
          original_title={popularMovies.results[0].original_title}
          overview={popularMovies.results[0].overview}
        />
      )}

      <Card.Group centered>
        {popularMovies?.results?.map((popularMovie) => {
          return (
            <MovieCard
              isLoading={isLoading}
              original_title={popularMovie.original_title}
              poster_path={popularMovie.poster_path}
              overview={popularMovie.overview}
              vote_average={popularMovie.vote_average}
              release_date={popularMovie.release_date}
            />
          );
        })}
      </Card.Group>
    </>
  );
}
