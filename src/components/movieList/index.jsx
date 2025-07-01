import React, { useState } from "react";

import classNames from "classnames";
import Loader from "components/commons/Loader";
import useDebounce from "components/hooks/useDebounce";
import { useMovieListFetch } from "hooks/reactQuery/useMovieApi";
import { Search } from "neetoicons";
import { Input } from "neetoui";
import { isNotNil } from "ramda";

import MovieListItem from "./MovieListItem";

const MovieList = () => {
  const [searchKey, setSearchKey] = useState("");

  const debouncedSearchKey = useDebounce(searchKey);

  const params = {
    apiKey: process.env.REACT_APP_OMDB_API_KEY,
    s: debouncedSearchKey,
  };

  const { data: { Search: movieList = [] } = {}, isLoading } =
    useMovieListFetch(params);

  return (
    <div
      className={classNames("w-full bg-main-primary", {
        "min-h-screen": !debouncedSearchKey,
        "h-full": debouncedSearchKey,
      })}
    >
      <div id="searchBox">
        <Input
          className="m-8 text-input-border-gray"
          placeholder="Search movies"
          prefix={<Search color="#aaa" />}
          type="search"
          value={searchKey}
          onChange={e => setSearchKey(e.target.value)}
        />
      </div>
      {isLoading ? (
        <div className="mt-10 flex h-96 items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="m-16 grid justify-items-center gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {isNotNil(debouncedSearchKey) &&
            movieList?.map(({ Title, Poster, Year, imdbID, Type }) => (
              <MovieListItem
                imdbID={imdbID}
                key={imdbID}
                moviePoster={Poster}
                movieTitle={Title}
                type={Type}
                year={Year}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
