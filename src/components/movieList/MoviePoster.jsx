import React from "react";
// const DEFAULT_IMG_LINK = "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg";

const MoviePoster = ({ imgLink }) => (
  <div className="flex h-full items-center">
    <img alt="Movie Poster" className="mx-auto mb-4 w-24" src={imgLink} />
  </div>
);

export default MoviePoster;
