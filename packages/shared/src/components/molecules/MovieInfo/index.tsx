import React from "react";

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";

//Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";
import { Movie, Credits } from "../../../interfaces";
import { HomeCover } from "../HomeCover/index";

export const MovieInfo: React.FC<Movie & Credits> = ({
  backdrop_path,
  poster_path,
  title,
  overview,
  vote_average,
  directors,
}) => (
  <Wrapper backdrop={backdrop_path}>
    <Content>
      <HomeCover
        image={`${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`}
        original_title={title}
      />
      <Text>
        <h1>{title}</h1>
        <h3>PLOT</h3>
        <p>{overview}</p>

        <div className="rating-directors">
          <div>
            <h3>RATING</h3>
            <div className="rating">{vote_average}</div>
          </div>
          <div className="director">
            {directors && <h3>DIRECTOR{directors?.length > 1 ? "S" : ""}</h3>}
            {directors?.map((director) => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);
