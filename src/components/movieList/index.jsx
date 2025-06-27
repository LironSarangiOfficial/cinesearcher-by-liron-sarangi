import React from "react";

import { Search } from "neetoicons";
import { Input } from "neetoui";

const sampleResponse = {
  Search: [
    {
      Title: "Dabang Sarkar",
      Year: "2018",
      imdbID: "tt8836572",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODY4MjE5MzQtOTZmNi00OTYwLWJkMGYtOGIxNDNmMGQ2OTQ5XkEyXkFqcGdeQXVyNTE3ODIxMDY@._V1_SX300.jpg",
    },
    {
      Title: "Dabang Damaad",
      Year: "2022",
      imdbID: "tt32404383",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BY2E3OWQ4MTQtMmVlNi00N2EzLWEzMTctNDE5MzY5ODBlMmZiXkEyXkFqcGdeQXVyOTA1MDQ3OTI@._V1_SX300.jpg",
    },
    {
      Title: "The Lady Dabang",
      Year: "2015",
      imdbID: "tt5790352",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODJiYzQyNTgtYWVmMi00M2JmLWExYTctY2RiNGFhM2NjMjZiXkEyXkFqcGdeQXVyNjUyNzY2NTU@._V1_SX300.jpg",
    },
    {
      Title: "Dabang 2 Pan Masala TVC Ft. Jimmy Shergill",
      Year: "2014",
      imdbID: "tt7318660",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2Q3OTNlMzYtN2YzMC00ZjY0LThiMzQtODdmYmQ1N2NlMzhkXkEyXkFqcGdeQXVyNjA4NTk0NjU@._V1_SX300.jpg",
    },
  ],
  totalResults: "4",
  Response: "True",
};

const MovieList = () => {
  // const [searchKey, setSearchKey] = useState('');
  console.log(sampleResponse);
  // const params = {
  //   apiKey: process.env.REACT_APP_OMDB_API_KEY,
  //   s: searchKey,
  // }
  // const movies = movieApi.fetchMovieList(params);

  return (
    <div>
      <Input
        className="w-full"
        placeholder="Search movies"
        prefix={<Search />}
        type="search"
      />
    </div>
  );
};

export default MovieList;
