import React from "react";

import { Modal as NeetoUIModal, Typography, Button, Tag } from "neetoui";

const Modal = ({ isOpen, onClose }) => {
  // The API data would be available here, assume `data` is fetched elsewhere in your code
  const data = {
    Title: "Spiderman",
    Year: "1990",
    Rated: "N/A",
    Released: "N/A",
    Runtime: "5 min",
    Genre: "Short",
    Director: "Christian Davi",
    Writer: "N/A",
    Actors: "N/A",
    Plot: "N/A",
    Language: "German",
    Country: "Switzerland",
    Awards: "N/A",
    Poster: "N/A",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "5.6/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "5.6",
    imdbVotes: "97",
    imdbID: "tt0100669",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  };

  const genres = data.Genre?.split(",").map(g => g.trim()) || [];

  return (
    <NeetoUIModal isOpen={isOpen} size="large" onClose={onClose}>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between">
          <div>
            <Typography.Subheading className="text-xl font-semibold">
              {data.Title}
            </Typography.Subheading>
            <div className="mt-2 flex gap-2">
              {genres.map((genre, index) => (
                <Tag key={index} label={genre} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="col-span-1">
            {data.Poster && data.Poster !== "N/A" ? (
              <img
                alt={data.Title}
                className="w-full rounded-lg shadow-md"
                src={data.Poster}
              />
            ) : (
              <div className="aspect-[2/3] flex w-full items-center justify-center rounded-lg bg-gray-200 text-sm text-gray-600">
                No Image
              </div>
            )}
          </div>
          <div className="col-span-2 space-y-2">
            <Typography.Paragraph className="italic">
              {data.Plot !== "N/A" ? data.Plot : "No plot available."}
            </Typography.Paragraph>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <Typography.Label>Director:</Typography.Label>
              <span>{data.Director}</span>
              <Typography.Label>Actors:</Typography.Label>
              <span>{data.Actors}</span>
              <Typography.Label>Box Office:</Typography.Label>
              <span>{data.BoxOffice}</span>
              <Typography.Label>Year:</Typography.Label>
              <span>{data.Year}</span>
              <Typography.Label>Runtime:</Typography.Label>
              <span>{data.Runtime}</span>
              <Typography.Label>Language:</Typography.Label>
              <span>{data.Language}</span>
              <Typography.Label>Rated:</Typography.Label>
              <span>{data.Rated}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <Button label="Close" style="secondary" onClick={onClose} />
        </div>
      </div>
    </NeetoUIModal>
  );
};

export default Modal;
