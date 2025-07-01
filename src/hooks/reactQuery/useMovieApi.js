import { QUERY_KEYS } from "constants/query";

import movieApi from "apis/movieApi";
import { Toastr } from "neetoui";
import { isEmpty } from "ramda";
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
    onSuccess: data => {
      if (data.Response === "False" || isEmpty(data?.Search)) {
        Toastr.error(data?.Error, {
          autoClose: 1000,
        });
      }
    },
  });

export { useSingleMovieFetch, useMovieListFetch };
