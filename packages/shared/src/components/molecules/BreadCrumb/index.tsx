import React from "react";
import Link from "next/link";
import { Wrapper, Content } from "./BreadCrumb.styles";

export const BreadCrumb = ({ movieTitle }: { movieTitle: string }) => (
  <Wrapper>
    <Content>
      <Link href="/">
        <span>HOME</span>
      </Link>
      <span> | </span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);
