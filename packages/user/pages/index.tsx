import { useQuery } from "react-query";
import { Button } from "shared";
import { movieService } from "shared";

export default function Home() {
  const { data: popularMovies } = useQuery(
    ["getPopularMovies"],
    movieService.getPopularMovies
  );

  return (
    <>
      <Button />
      {popularMovies &&
        popularMovies?.results?.map((popularMovie) => {
          return <p key={popularMovie.id}>{popularMovie.original_title}</p>;
        })}
    </>
  );
}
