import React from "react";

import classNames from "classnames";

const HistoryItem = ({ title, isActive, onClick }) => (
  // console.log(" movie history item Props: ", title);

  <div
    className={classNames(
      "neeto-ui-rounded neeto-ui-text-black my-2 cursor-pointer bg-history-item-inactive py-2 text-center",
      {
        "neeto-ui-text-white bg-history-item-active": isActive,
      }
    )}
    onClick={onClick}
  >
    {title}
  </div>
);
export default HistoryItem;
