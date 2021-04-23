import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background-color: var(--darkGrey);
  padding: 0 20px;
  margin-bottom: 20px;
  margin-top: -30px;
  @media screen and (max-width: 720px) {
    height: 50px;
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background-color: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
    @media screen and (max-width: 720px) {
      width: 20px;
      top: 4px;
    }
  }

  input {
    font-size: var(--fontBig);
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: none;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
      height: 15px;
      padding: 0 0 0 40px;
    }
  }

  @media screen and (max-width: 720px) {
    height: 30px;
  }
`;
