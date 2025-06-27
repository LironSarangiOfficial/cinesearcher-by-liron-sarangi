import React from "react";

import MovieHistoryList from "./movieHistory";
import MovieList from "./movieList";

const MainPage = () => (
  <div>
    <div className="flex flex-row">
      <MovieList />
      <MovieHistoryList />
    </div>
  </div>
);

export default MainPage;
