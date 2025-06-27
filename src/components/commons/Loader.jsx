import React from "react";

import { Spinner } from "neetoui";

const Loader = () => (
  <div className="mt-2 text-center text-gray-500">
    <Spinner
      className="absolute left-1/2 top-1/2"
      size="large"
      strokeWidth={2}
    />
    <div className="mt-4 text-center text-gray-500">Loading...</div>
  </div>
);

export default Loader;
