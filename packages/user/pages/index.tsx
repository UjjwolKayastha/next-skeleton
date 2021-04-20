import { useQuery } from "react-query";
import { Card } from "semantic-ui-react";
import { movieService, MovieCard } from "shared";

export default function Home() {
  const { data: popularMovies, isLoading } = useQuery(
    ["getPopularMovies"],
    movieService.getPopularMovies
  );

  return (
    <>
      <Card.Group centered>
        {popularMovies?.results?.map((popularMovie) => {
          return (
            <MovieCard
              isLoading={isLoading}
              original_title={popularMovie.original_title}
              backdrop_path={popularMovie.backdrop_path}
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
