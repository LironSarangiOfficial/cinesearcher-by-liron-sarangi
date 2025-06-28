import axios from "axios";

const fetchOneMovie = id => axios.get("http://www.omdbapi.com/", { i: id });
const fetchMovieListBySearch = params =>
  axios.get("http://www.omdbapi.com/", { params });

export default { fetchOneMovie, fetchMovieListBySearch };
