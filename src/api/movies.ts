import { axios } from "./axios";

export type TMovie = {
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
  Poster: string;
};

export type TMoviesApiQueryParams = {
  title: string;
};

export type TMoviesApiQueryResponse = {
  Search: TMovie[];
  Response: string;
  totalResults: string;
};

export async function getMoviesApi(
  params: TMoviesApiQueryParams,
): Promise<TMoviesApiQueryResponse> {
  return (
    await axios({
      params: { s: params.title },
    })
  ).data;
}
