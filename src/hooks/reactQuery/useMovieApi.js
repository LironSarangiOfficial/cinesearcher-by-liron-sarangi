import { QUERY_KEYS } from "constants/query";

import movieApi from "apis/movieApi";
import { useQuery } from "react-query";

const useSingleMovieFetch = queryParams =>
  useQuery({
    queryKey: [QUERY_KEYS.MODAL, queryParams.i],
    queryFn: () => movieApi.fetchMovie(queryParams),
    refetchOnWindowFocus: false,
  });

const useMovieListFetch = queryParams =>
  useQuery({
    queryKey: [QUERY_KEYS.MOVIES, queryParams.s],
    queryFn: () => movieApi.fetchMovie(queryParams),
    enabled: !!queryParams.s,
    refetchOnWindowFocus: false,
  });

export { useSingleMovieFetch, useMovieListFetch };
