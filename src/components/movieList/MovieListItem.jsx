import React, { useState } from "react";

import { Button, Typography } from "neetoui";

import MoviePoster from "./MoviePoster";

const MovieListItem = ({ movieTitle = "", moviePoster, year }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="neeto-ui-shadow-lg flex min-h-full min-w-full flex-col px-6 pb-6 md:w-52 lg:w-56">
      <MoviePoster imgLink={moviePoster} />
      <Typography className="w-5/6 text-lg">{movieTitle}</Typography>
      <Typography component="span" weight="light">
        {`Movie • ${year}`}
      </Typography>
      <div className="">
        <Button
          className="flex-end mt-4 w-auto rounded-md font-bold text-button-font-blue"
          style="secondary"
          type="button"
          onClick={() => {
            setIsModalVisible(val => !val);
            console.log(isModalVisible);
          }}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default MovieListItem;
