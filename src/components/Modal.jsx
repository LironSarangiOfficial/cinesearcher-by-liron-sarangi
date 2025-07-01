import React from "react";

import { useSingleMovieFetch } from "hooks/reactQuery/useMovieApi";
import { Modal as NeetoUIModal, Typography, Tag } from "neetoui";
import { split, map, trim, pipe, defaultTo } from "ramda";

import CardLabel from "./CardLabel";
import Loader from "./commons/Loader";

const Modal = ({ isOpen, onClose, imdbID }) => {
  // const queryRes = useSingleMovieFetch(viewDetailsParams);
  const { data: response, isLoading } = useSingleMovieFetch({
    apiKey: process.env.REACT_APP_OMDB_API_KEY,
    i: imdbID,
  });

  // console.log("Modal data:", response);
  // console.log("React Query Results: ", queryRes);

  const genres = pipe(defaultTo(""), split(","), map(trim))(response?.Genre);

  return (
    <NeetoUIModal isOpen={isOpen} size="large" onClose={onClose}>
      {isLoading ? (
        <div className="flex-justify-center items-center space-y-4 p-6">
          <Loader />
        </div>
      ) : (
        <div className="space-y-4 p-6 ">
          <div className="flex items-start justify-between">
            <div>
              <Typography className="pb-4 text-3xl font-semibold" style="h1">
                {response.Title}
              </Typography>
              <div className="mt-2 flex gap-2">
                {genres.map((genre, index) => (
                  <Tag key={index} label={genre} />
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="col-span-1 flex items-center justify-center">
              {response.Poster && response.Poster !== "N/A" ? (
                <img
                  alt={response.Title}
                  className="w-full rounded-lg shadow-md"
                  src={response.Poster}
                />
              ) : (
                <div className="flex w-full items-center justify-center rounded-lg bg-gray-200 text-sm text-gray-600">
                  No Image
                </div>
              )}
            </div>
            <div className="col-span-2 space-y-4 pl-12">
              <Typography className="mb-6 font-light italic">
                {response.Plot !== "N/A" ? response.Plot : "No plot available."}
              </Typography>
              <div className="flex flex-col gap-x-4 gap-y-2 text-sm">
                <CardLabel label="Director: " value={response.Director} />
                <CardLabel label="Actors: " value={response.Actors} />
                <CardLabel label="Box Office: " value={response.BoxOffice} />
                <CardLabel label="Year: " value={response.Year} />
                <CardLabel label="Runtime: " value={response.Runtime} />
                <CardLabel label="Language: " value={response.Language} />
                <CardLabel label="Rated: " value={response.Rated} />
              </div>
            </div>
          </div>
        </div>
      )}
    </NeetoUIModal>
  );
};

export default Modal;
