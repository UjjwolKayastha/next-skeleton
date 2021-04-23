import { useQuery } from "react-query";
import { Card, Image } from "semantic-ui-react";

import { GetServerSideProps } from "next";
import {
  movieService,
  MovieCard,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  HomeCover,
  GlobalStyle,
} from "shared";

const Home = () => {
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
              key={popularMovie.id}
              isLoading={isLoading}
              id={popularMovie.id}
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
};
// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const popularMovies = await movieService.getPopularMovies();
//     return {
//       props: {
//         popularMovies: popularMovies?.results,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {},
//     };
//   }
// };

export default Home;
