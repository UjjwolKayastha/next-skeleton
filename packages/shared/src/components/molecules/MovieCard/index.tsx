import React from "react";

import {
  Card,
  Icon,
  Image,
  Loader,
  Dimmer,
  Placeholder,
} from "semantic-ui-react";
import { Movie } from "../../../interfaces";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";
import { ellipsis } from "../../../utils/ellipsis";
import Link from "next/link";

export const MovieCard: React.FC<Movie & { isLoading: boolean }> = ({
  original_title,
  overview,
  vote_average,
  release_date,
  isLoading,
  poster_path,
  id,
}) => {
  return (
    <Link href={`/${id}`}>
      <Card raised>
        {isLoading ? (
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
        ) : (
          <Image
            src={`${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`}
            alt={original_title}
          />
        )}

        {/* <Card.Content>
        <Card.Header>{original_title}</Card.Header>
        <Card.Meta>{release_date}</Card.Meta>
        <Card.Description>{ellipsis(overview, 100)}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="star" />
          {vote_average}
        </a>
      </Card.Content> */}
      </Card>
    </Link>
  );
};
