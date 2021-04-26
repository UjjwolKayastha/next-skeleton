import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { Card } from "semantic-ui-react";

import { Wrapper } from "../styles/index.styles";

// import { GetServerSideProps } from "next";

import {
  movieService,
  MovieCard,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  HomeCover,
  Spin,
  SearchBar,
  Button,
} from "shared";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    data: movies,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(["getmovies", searchTerm], movieService.getMovies, {
    getNextPageParam: (lg) => {
      return lg.page + 1;
    },
  });

  console.log("MOVIES", movies);

  return (
    <>
      {movies?.pages[0].results[0] && !searchTerm ? (
        <Wrapper backdrop={movies?.pages[0].results[0].backdrop_path}>
          <HomeCover
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.pages[0].results[0].backdrop_path}`}
            original_title={movies.pages[0].results[0].original_title}
            overview={movies.pages[0].results[0].overview}
          />
        </Wrapper>
      ) : null}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Card.Group centered>
        {movies?.pages.map((page) => {
          return page.results?.map((popularMovie) => {
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
          });
        })}
      </Card.Group>
      {isFetchingNextPage ? (
        <Spin />
      ) : (
        <Button name={"LoadMore"} onClick={() => fetchNextPage()} />
      )}
    </>
  );
};
// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const movies = await movieService.getmovies();
//     return {
//       props: {
//         movies: movies?.results,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {},
//     };
//   }
// };

export default Home;
