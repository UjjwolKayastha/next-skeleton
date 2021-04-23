import React, { useState } from "react";
import { useQuery } from "react-query";
import {
  movieService,
  BreadCrumb,
  MovieInfoBar,
  MovieInfo,
  Grid,
  Actor,
  IMAGE_BASE_URL,
  POSTER_SIZE,
} from "shared";
import { useRouter } from "next/router";

const noImage = require("../../images/no-image.jpg");
const MovieDetails = () => {
  const route = useRouter();

  const movieId = route.query.id;

  const { data: movieDetails } = useQuery(["get-movie", movieId], () =>
    movieService.getMovieById(Number(movieId))
  );

  // console.log("MOVIE DETAILS", movieDetails);

  const {
    original_title,
    backdrop_path,
    poster_path,
    title,
    overview,
    vote_average,
    crew,
    runtime,
    budget,
    revenue,
    spoken_languages,
    cast,
  } = movieDetails || {};

  return (
    <>
      <BreadCrumb movieTitle={original_title} />
      <MovieInfo
        backdrop_path={backdrop_path}
        poster_path={poster_path}
        title={title}
        overview={overview}
        vote_average={vote_average}
        directors={crew}
      />
      <MovieInfoBar
        time={runtime}
        budget={budget}
        revenue={revenue}
        language={spoken_languages?.map((k) => k.name)?.join(", ")}
      />
      <Grid header="Cast">
        {cast?.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : noImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default MovieDetails;
