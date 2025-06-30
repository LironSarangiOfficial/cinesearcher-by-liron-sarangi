import React from "react";

import { NoData } from "neetoui";
import routes from "routes";

const NotFound = () => (
  <div className="grid h-screen grid-cols-1 grid-rows-1 place-items-center">
    <NoData
      title="404 | Page Not Found"
      primaryButtonProps={{
        label: "Back to Home",
        to: routes.root,
      }}
    />
  </div>
);

export default NotFound;
