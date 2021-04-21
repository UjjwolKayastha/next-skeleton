import React from "react";
import { Image } from "semantic-ui-react";
import { Content, Text, Wrapper } from "./HomeCover.styles";

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
  console.log("IMG", image);
  return (
    <Wrapper>
      <Image centered src={image} className="image" />
      <Content>
        <Text>
          <h1>{original_title}</h1>
          <p>{overview}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};
