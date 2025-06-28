import React, { useEffect, useState } from "react";

import movieApi from "apis/movieApi";
import classNames from "classnames";
import useDebounce from "components/hooks/useDebounce";
import { Search } from "neetoicons";
import { Input } from "neetoui";

import MovieListItem from "./MovieListItem";

const MovieList = () => {
  const [searchKey, setSearchKey] = useState("");
  const [movieList, setMovieList] = useState([]);

  const debouncedSearchKey = useDebounce(searchKey);

  const params = {
    apiKey: process.env.REACT_APP_OMDB_API_KEY,
    s: debouncedSearchKey,
  };

  const movieListQuery = async () => {
    try {
      const response = await movieApi.fetchMovieListBySearch(params);
      console.log(response.data.Search);
      setMovieList(() => response.data.Search);
    } catch (error) {
      console.error("Error fetching movie list:", error);
    }
  };

  useEffect(() => {
    movieListQuery();
  }, [debouncedSearchKey]);

  return (
    <div
      className={classNames("w-full bg-main-primary", {
        "h-screen": !debouncedSearchKey,
        "h-auto": debouncedSearchKey,
      })}
    >
      <Input
        className="m-8 text-input-border-gray"
        placeholder="Search movies"
        prefix={<Search color="#aaa" />}
        type="search"
        value={searchKey}
        onChange={e => setSearchKey(e.target.value)}
      />
      <div className="m-16 grid justify-items-center gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {(movieList || []).map(({ Title, Poster, Year, imdbID }) => (
          <MovieListItem
            key={imdbID}
            moviePoster={Poster}
            movieTitle={Title}
            year={Year}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
