import React from "react";

import { Spinner } from "neetoui";

const Loader = () => (
  <Spinner className="absolute left-1/2 top-1/2" size="large" strokeWidth={2} />
);

export default Loader;
