import React from "react";

import { Typography } from "neetoui";

const CardLabel = ({ label, value }) => (
  <Typography style="h4" weight="zbold">
    {label}
    <span className="text-sm font-light">{value}</span>
  </Typography>
);

export default CardLabel;
