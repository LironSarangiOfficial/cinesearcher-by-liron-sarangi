import axios from "axios";

const fetchMovie = params => axios.get("https://www.omdbapi.com/", { params });

export default { fetchMovie };
