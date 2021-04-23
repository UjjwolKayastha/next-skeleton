import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  background-color: var(--darkGrey);
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  padding: 2px;
  border: none;

  h3 {
    margin: 10px 0 0 0;
  }
  p {
    margin: 5px 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;
