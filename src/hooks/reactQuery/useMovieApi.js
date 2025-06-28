import movieApi from "apis/movieApi";
import { useQuery } from "react-query";

const useSingleMovieFetch = queryParams =>
  useQuery({
    queryKey: ["oneMovie", queryParams.i],
    queryFn: () => movieApi.fetchMovie(queryParams),
  });

export { useSingleMovieFetch };
