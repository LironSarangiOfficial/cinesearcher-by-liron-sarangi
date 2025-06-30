import React from "react";

import MovieHistoryList from "./movieHistory";
import MovieList from "./movieList";

const MainPage = () => (
  <div className="flex flex-row">
    <MovieList />
    <MovieHistoryList />
  </div>
);

export default MainPage;
