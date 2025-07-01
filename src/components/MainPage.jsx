import React from "react";

import MovieHistoryList from "./movieHistory";
import MovieList from "./movieList";

const MainPage = () => (
  <div className="flex h-screen flex-row">
    <MovieList />
    <MovieHistoryList />
  </div>
);

export default MainPage;
