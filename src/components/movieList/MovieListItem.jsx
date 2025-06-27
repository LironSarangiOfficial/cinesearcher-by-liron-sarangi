import React from "react";

import { Button, Typography } from "neetoui";

import MoviePoster from "./MoviePoster";

const sampleResponse = {
  Title: "Dabang Sarkar",
  Year: "2018",
  Rated: "N/A",
  Released: "30 Nov 2018",
  Runtime: "N/A",
  Genre: "Action",
  Director: "Yogesh Raj Mishra",
  Writer: "Yogesh Raj Mishra, Manoj Pandey, Manoj Pandey",
  Actors: "Khesari Lal Yadav, Akanksha Awasthi, C P Bhatt",
  Plot: "Veeru's father, who works in a pharmaceutical factory, is murdered and falsely implicated in a case. An angry Veeru becomes a police officer to exact revenge on his father's killers and end crime.",
  Language: "Bhojpuri, Hindi",
  Country: "India",
  Awards: "N/A",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BODY4MjE5MzQtOTZmNi00OTYwLWJkMGYtOGIxNDNmMGQ2OTQ5XkEyXkFqcGdeQXVyNTE3ODIxMDY@._V1_SX300.jpg",
  Ratings: [],
  Metascore: "N/A",
  imdbRating: "N/A",
  imdbVotes: "31",
  imdbID: "tt8836572",
  Type: "movie",
  DVD: "N/A",
  BoxOffice: "N/A",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};

const MovieListItem = ({ movieTitle = "", moviePoster, year = "1999" }) => {
  console.log(sampleResponse);

  return (
    <div className="flex h-72 w-48 flex-col items-center border-2 border-gray-300">
      <MoviePoster imgLink={moviePoster} />
      <Typography style="h1">{movieTitle}</Typography>
      <Typography component="span" weight="light">
        {`Movie • ${year}`}
      </Typography>
      <Button color="#4a90e2" />
    </div>
  );
};

export default MovieListItem;
