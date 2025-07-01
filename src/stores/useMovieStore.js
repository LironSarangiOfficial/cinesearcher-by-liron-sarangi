import { existsBy } from "neetocist";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useMovieStore = create(
  persist(
    set => ({
      historyList: [],
      currentMovieId: "",
      lastViewedMovieId: "",

      setCurrentMovieId: currentMovieId => set({ currentMovieId }),
      setLastViewedMovieId: lastViewedMovieId => set({ lastViewedMovieId }),
      addToHistory: ({ imdbID, title }) =>
        set(({ historyList }) => {
          if (existsBy({ imdbID }, historyList)) {
            return { historyList };
          }

          return { historyList: [{ imdbID, title }, ...historyList] };
        }),
      clearHistory: () => set(() => ({ historyList: [] })),
    }),
    {
      name: "movie-history-storage",
    }
  )
);

export default useMovieStore;
