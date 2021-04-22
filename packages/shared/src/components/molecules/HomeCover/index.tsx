import React from "react";
import { Content, Text, Wrapper, ImageWrapper } from "./HomeCover.styles";

interface HomeCoverProps {
  image: string;
  original_title: string;
  overview: string;
}

export const HomeCover: React.FC<HomeCoverProps> = ({
  image,
  original_title,
  overview,
}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={image} className="image" />
      </ImageWrapper>
      <Content>
        <Text>
          <h1>{original_title}</h1>
          <p>{overview}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};
