import React, { forwardRef } from "react";

const HistoryItemComponent = ({ title, historyItemClasses }, ref) => (
  <div className={historyItemClasses} ref={ref}>
    {title}
  </div>
);

const HistoryItem = forwardRef(HistoryItemComponent);

export default HistoryItem;
