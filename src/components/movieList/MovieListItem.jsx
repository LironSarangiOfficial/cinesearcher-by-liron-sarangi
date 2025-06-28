import React, { useState } from "react";

import Modal from "components/Modal";
import { capitalize } from "neetocist";
import { Button, Typography } from "neetoui";
import useMovieStore from "stores/useMovieStore";

import MoviePoster from "./MoviePoster";

const MovieListItem = ({
  imdbID,
  movieTitle = "",
  moviePoster,
  year,
  type,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // console.log("MovieListItem props:", {
  //   imdbID,
  //   movieTitle,
  //   moviePoster,
  //   year,
  // });
  const addToHistory = useMovieStore(store => store.addToHistory);
  const handleOnClose = () => {
    setIsModalVisible(false);
    addToHistory({ imdbID, movieTitle });
  };

  return (
    <>
      <div className="neeto-ui-shadow-lg flex min-h-full min-w-full flex-col px-6 pb-6 md:w-52 lg:w-56">
        <MoviePoster imgLink={moviePoster} />
        <Typography className="w-5/6 text-lg">{movieTitle}</Typography>
        <Typography component="span" weight="light">
          {`${capitalize(type)} • ${year}`}
        </Typography>
        <div className="">
          <Button
            className="flex-end mt-4 w-auto rounded-md font-bold text-button-font-blue"
            style="secondary"
            type="button"
            onClick={() => {
              setIsModalVisible(val => !val);
            }}
          >
            View Details
          </Button>
        </div>
      </div>
      <Modal imdbID={imdbID} isOpen={isModalVisible} onClose={handleOnClose} />
    </>
  );
};

export default MovieListItem;
