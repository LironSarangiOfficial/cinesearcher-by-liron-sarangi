import { OMDB_API_URL } from "constants";

import axios from "axios";

const fetchMovie = params => axios.get(OMDB_API_URL, { params });

export default { fetchMovie };
