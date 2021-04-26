import styled from "styled-components";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "shared";

export const Wrapper = styled.div`
  background: ${({ backdrop }: { backdrop: string | undefined }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;