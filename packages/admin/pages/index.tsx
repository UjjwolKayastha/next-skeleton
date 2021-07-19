/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState } from "react";
import { useQuery } from "react-query";
import { pixabayService, Title } from "shared";

import { styled } from "linaria/react";

// Write your styles in `styled` tag
// const Title = styled.h1`
//   font-family: ;
// `;

const Container = styled.main`
  font-size: 14px;
  color: ${(props) => props.color};
  padding-left: 20px;
  padding-right: 50px;
  &:hover {
    border-color: blue;
  }
  & > div {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 20px;
    grid-column-gap: 50px;
  }
`;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data: photos, isLoading } = useQuery(
    ["get-photos", searchTerm],
    pixabayService.getPhotos,
    {}
  );

  console.log("PHOTOS", photos);

  return (
    <div>
      <Head>
        <title>PIXABAY</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title>IMAGES</Title>
        <div>
          {photos?.hits.map((photo) => (
            <img key={photo?.id} src={photo?.previewURL} alt={photo?.user} />
          ))}
        </div>
      </Container>
    </div>
  );
}
