import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { TMoviesApiQueryResponse, getMoviesApi } from "../../api/movies";
import MoviesTable from "./components/Table";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<TMoviesApiQueryResponse>();
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (search: string) => {
    setLoading(true);
    const res = await getMoviesApi({ title: search });
    setData(res);
    setLoading(false);
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputRef.current) return;
    fetchMovies(inputRef.current?.value);
  };

  return (
    <Container maxW="1400">
      <Heading as="h1" size="2xl" textAlign="center" mt={10}>
        Movies Search
      </Heading>

      <form onSubmit={handleSearch}>
        <FormControl>
          <FormLabel>Search movies by Title</FormLabel>
          <Stack direction="row">
            <Input ref={inputRef} />
            <Button type="submit">Search</Button>
          </Stack>
        </FormControl>
      </form>
      <MoviesTable data={data} loading={loading} />
    </Container>
  );
};

export default Home;
