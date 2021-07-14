import { API } from "../api";

import { QueryFunction } from "react-query";

// const getPhotos: QueryFunction<any> = async (context) => {
//   const [, searchTerm] = context.queryKey;
//   const response = await API.get(
//     `https://pixabay.com/api/?key=22493920-5ce683c2f724910db65ed2e5d&q=${searchTerm}&image_type=photo&pretty=true`
//   );

//   if (response) {
//     return response;
//   }
// };
interface getPhotosProps {
  hits?: any;
  page?: number;
  total?: number;
}

const getPhotos = (context: any) => {
  const [, searchTerm] = context.queryKey;
  return fetch(
    `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("DATA FROM SERIVCCEE", data);
      return data;
    })
    .catch((err) => console.log("err>>", err));
};

export const pixabayService = {
  getPhotos,
};
