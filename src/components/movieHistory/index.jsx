import React, { useState } from "react";

import { Delete } from "neetoicons";
import { prop } from "ramda";
import useMovieStore from "stores/useMovieStore";

import HistoryItem from "./HistoryItem";

const MovieHistoryList = () => {
  const historyList = useMovieStore(prop("historyList"));
  const clearHistory = useMovieStore(prop("clearHistory"));
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = index => {
    setActiveIndex(index);
  };

  const handleDelete = () => {
    clearHistory();
  };

  return (
    <div className="w-8/12 bg-main-primary">
      <div className="neeto-ui-bg-white neeto-ui-rounded neeto-ui-shadow-md neeto-ui-p-4 neeto-ui-h-full neeto-ui-w-64">
        <div className="flex flex-row justify-center">
          <h2 className="neeto-ui-text-xl neeto-ui-font-bold neeto-ui-text-center neeto-ui-mb-4">
            View history
          </h2>
          <Delete
            className="absolute right-6 cursor-pointer"
            onClick={handleDelete}
          />
        </div>
        <div className="neeto-ui-overflow-y-auto neeto-ui-space-y-2">
          {historyList.map((item, index) => (
            <HistoryItem
              isActive={index === activeIndex}
              key={item.title + index}
              title={item.title}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieHistoryList;
