import React from "react";

import { t } from "i18next";
import { Typography } from "neetoui";

const Navbar = () => (
  <div>
    <div>
      <Typography color="blue" component="span" style="h1" weight="bold">
        {t("")}
      </Typography>
      <Typography color="black" component="span" style="h1" weight="bold" />
    </div>
  </div>
);

export default Navbar;
