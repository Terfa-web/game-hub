
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient  = new APIClient<Genre>('/genres');
const useGenres = (genreId: number) => useQuery({
  queryKey: ['genres', genreId],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000,
  initialData: { count: genres.length, results: genres}
});

export default  useGenres