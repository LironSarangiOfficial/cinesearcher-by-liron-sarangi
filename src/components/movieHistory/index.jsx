import React, { useEffect, useRef, useState } from "react";

import classNames from "classnames";
import { t } from "i18next";
import { Typography } from "neetoui";
import { isEmpty, prop } from "ramda";
import useMovieStore from "stores/useMovieStore";

import ClearConfirmationModal from "./ClearConfirmationModal";
import HistoryItem from "./HistoryItem";

const MovieHistoryList = () => {
  const [isClearConfirmationVisible, setIsClearConfirmationVisible] =
    useState(false);
  const historyList = useMovieStore(prop("historyList"));
  const clearHistory = useMovieStore(prop("clearHistory"));
  const lastViewedMovieId = useMovieStore(prop("lastViewedMovieId"));

  const lastViewedHistoryItemRef = useRef(null);

  const handleClearHistory = () => {
    clearHistory();
  };

  useEffect(() => {
    if (lastViewedHistoryItemRef.current) {
      setTimeout(() => {
        lastViewedHistoryItemRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }, 10);
    }
  }, [lastViewedMovieId]);

  return (
    <>
      <div className="neeto-ui-shadow-md h-screen w-1/3 bg-main-primary">
        <div className="neeto-ui-rounded-lg neeto-ui-p-4 flex h-full flex-col">
          <div className="flex flex-row items-center justify-between px-4">
            <h2 className="mb-4 text-center text-xl font-bold">
              {t("history.viewHistory")}
            </h2>
            {/* <Button
              label={t("clearLabel")}
              style="danger-text"
              onClick={handleDelete}
            /> */}
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto pr-2">
            {isEmpty(historyList) ? (
              <div className="flex flex-grow items-center justify-center">
                <Typography
                  className="text-center"
                  style="body1"
                  weight="semibold"
                >
                  {t("history.noHistory")}
                </Typography>
              </div>
            ) : (
              historyList.map(({ imdbID, title }) => {
                const historyItemClasses = classNames(
                  "flex justify-center items-center neeto-ui-rounded my-2 cursor-pointer py-2 text-center",
                  {
                    "neeto-ui-text-white bg-history-item-active":
                      imdbID === lastViewedMovieId,
                    "neeto-ui-text-black bg-history-item-inactive":
                      imdbID !== lastViewedMovieId,
                  }
                );

                return (
                  <HistoryItem
                    historyItemClasses={historyItemClasses}
                    key={imdbID}
                    title={title}
                    ref={
                      imdbID === lastViewedMovieId
                        ? lastViewedHistoryItemRef
                        : null
                    }
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
      <ClearConfirmationModal
        handleClearHistory={handleClearHistory}
        isOpen={isClearConfirmationVisible}
        onClose={() => setIsClearConfirmationVisible(false)}
      />
    </>
  );
};

export default MovieHistoryList;
