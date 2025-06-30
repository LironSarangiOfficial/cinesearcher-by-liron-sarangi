import React, { useState } from "react";

import { t } from "i18next";
import { Button } from "neetoui";
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
    <div className="m-auto max-h-screen w-8/12 overflow-auto bg-main-primary">
      <div className="neeto-ui-rounded neeto-ui-shadow-md neeto-ui-p-4 neeto-ui-h-full neeto-ui-w-64">
        <div className="flex flex-row items-center justify-between px-4">
          <h2 className="neeto-ui-text-xl neeto-ui-font-bold neeto-ui-text-center neeto-ui-mb-4">
            {t("viewHistory")}
          </h2>
          <Button
            label={t("clearLabel")}
            style="danger-text"
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
