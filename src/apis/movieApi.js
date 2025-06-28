import axios from "axios";

const fetchMovie = params => axios.get("http://www.omdbapi.com/", { params });

export default { fetchMovie };
