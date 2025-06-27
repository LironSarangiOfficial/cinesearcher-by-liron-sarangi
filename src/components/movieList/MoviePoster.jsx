import React from "react";

const MoviePoster = ({
  imgLink = "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg",
}) => <img alt="Poster" className="w-full" src={imgLink} />;

export default MoviePoster;
