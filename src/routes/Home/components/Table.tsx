import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Stack,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { TMoviesApiQueryResponse } from "../../../api/movies";

interface MoviesTableProps {
  data: TMoviesApiQueryResponse | undefined;
  loading: boolean;
}

export default function MoviesTable(props: MoviesTableProps) {
  const { data, loading } = props;
  const movies = data?.Search;

  if (loading)
    return (
      <Stack align="center" justify="center" p="40px">
        <Spinner />
      </Stack>
    );

  if (!movies) {
    return (
      <Stack align="center" justify="center" p="40px">
        <Text>No Results!</Text>
      </Stack>
    );
  }

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Year</Th>
            <Th>Type</Th>
            <Th>imdbID</Th>
            <Th>Poster</Th>
          </Tr>
        </Thead>
        <Tbody>
          {movies?.map((movie) => (
            <Tr key={movie.imdbID}>
              <Td>{movie.Title}</Td>
              <Td>{movie.Year}</Td>
              <Td>{movie.Type}</Td>
              <Td>{movie.imdbID}</Td>
              <Td>
                <img src={movie.Poster} width={60} height="auto" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
