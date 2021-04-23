import React from "react";

//Styles
import { Wrapper, Content } from "./Grid.styles";

export const Grid = ({
  header,
  children,
}: {
  header: string;
  children: React.ReactNode;
}) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);
