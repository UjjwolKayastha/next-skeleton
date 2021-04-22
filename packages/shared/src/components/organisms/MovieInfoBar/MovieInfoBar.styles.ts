import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background: var(--darkGrey);
  min-height: 100px;
  align-items: "center";
  padding: 0 20px;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;

  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--medGrey);
    border-radius: 20px;
    margin: 20px;
    flex: 1;
    p {
      padding: 0 10px;
    }
    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;

    .column {
      margin: 20px 0;
    }
  }
`;
