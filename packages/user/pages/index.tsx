import { useState } from "react";
import Head from "next/head";
import { useInfiniteQuery, QueryClient } from "react-query";
import { Card } from "semantic-ui-react";

import { Wrapper } from "../styles/index.styles";

import { GetStaticProps } from "next";

import { dehydrate } from "react-query/hydration";

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

const Home = ({ dehydratedState }) => {
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
    initialData: dehydratedState.queries[0].state.data,
  });

  // console.log("MOVIES", movies);

  return (
    <>
      <Head>
        <html lang="en" />
        <title>Movies App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A movie site that shows popular movies with movie details"
        />
      </Head>
      {movies?.pages?.[0]?.results[0] && !searchTerm ? (
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
        {movies?.pages?.map((page) => {
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
        <>
          <Button name={"Load More"} onClick={() => fetchNextPage()} />
          {/* <Button
            name={"SENTRY"}
            onClick={() => {
              throw new Error("Sentry Front error test");
            }}
          /> */}
        </>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery(
      ["getmovies"],
      movieService.getMovies
    );
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default Home;
