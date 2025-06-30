import React from "react";

import { Typography } from "neetoui";

const CardLabel = ({ label, value }) => (
  <Typography style="p" weight="bold">
    {label}
    <span className="font-light">{value}</span>
  </Typography>
);

export default CardLabel;
