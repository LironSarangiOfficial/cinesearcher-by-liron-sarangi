import React, { useState } from "react";

import Modal from "components/Modal";
import { t } from "i18next";
import { capitalize } from "neetocist";
import { Button, Typography } from "neetoui";
import { prop } from "ramda";
import useMovieStore from "stores/useMovieStore";

import MoviePoster from "./MoviePoster";

const MovieListItem = ({ imdbID, movieTitle, moviePoster, year, type }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const setLastViewedMovieId = useMovieStore(prop("setLastViewedMovieId"));
  // const currentMovieId = useMovieStore(prop("currentMovieId"));
  const setCurrentMovieId = useMovieStore(prop("setCurrentMovieId"));

  const addToHistory = useMovieStore(store => store.addToHistory);

  const handleViewDetails = () => {
    setLastViewedMovieId(imdbID);
    setCurrentMovieId(imdbID);
    setIsModalVisible(true);
  };

  const handleOnClose = () => {
    setIsModalVisible(false);
    setCurrentMovieId("");
    addToHistory({ imdbID, title: movieTitle });
  };

  return (
    <>
      <div className="neeto-ui-shadow-lg flex min-h-full min-w-full flex-col px-4 pb-2 text-base md:w-52 lg:w-56">
        <MoviePoster imgLink={moviePoster} />
        <Typography className="w-5/6 font-medium">{movieTitle}</Typography>
        <Typography component="span" weight="light">
          {`${capitalize(type)} • ${year}`}
        </Typography>
        <div className="">
          <Button
            className="flex-end mt-2 w-auto rounded-md font-bold text-button-font-blue"
            label={t("movie.viewDetails")}
            style="secondary"
            type="button"
            onClick={handleViewDetails}
          />
        </div>
      </div>
      <Modal imdbID={imdbID} isOpen={isModalVisible} onClose={handleOnClose} />
    </>
  );
};

export default MovieListItem;
