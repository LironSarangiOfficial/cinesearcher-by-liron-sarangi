import { OMDB_API_URL } from "constants";

import axios from "axios";

// const apiKey = process.env.REACT_APP_OMDB_API_KEY
// const API_BASE_URL = "https://www.omdbapi.com"

const fetchMovie = params => axios.get(OMDB_API_URL, { params });
// const fetchMovie = params => axios.get("", { params });

export default { fetchMovie };
