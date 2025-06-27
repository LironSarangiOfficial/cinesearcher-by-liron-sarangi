import axios from "axios";

const fetchOneMovie = id => axios.get("http://www.omdbapi.com/", { i: id });
const fetchMovieList = params =>
  axios.get("http://www.omdbapi.com/", { params });

export default { fetchOneMovie, fetchMovieList };
