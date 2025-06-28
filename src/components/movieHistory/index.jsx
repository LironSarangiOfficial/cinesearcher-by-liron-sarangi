import React, { useState } from "react";

import useMovieStore from "stores/useMovieStore";

import HistoryItem from "./HistoryItem";

const MovieHistoryList = () => {
  const historyList = useMovieStore(store => store.historyList);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = index => {
    setActiveIndex(index);
  };

  return (
    <div className="w-5/12 rounded-lg border-2 border-black ">
      <div className="neeto-ui-bg-white neeto-ui-rounded neeto-ui-shadow-md neeto-ui-p-4 neeto-ui-h-full neeto-ui-w-64">
        <h2 className="neeto-ui-text-xl neeto-ui-font-bold neeto-ui-text-center neeto-ui-mb-4">
          View history
        </h2>
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
