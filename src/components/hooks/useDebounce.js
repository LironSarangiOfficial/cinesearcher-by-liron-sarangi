import { useEffect, useState } from "react";

const useDebounce = searchTerm => {
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 400);

    return () => {
      clearTimeout(timerID);
    };
  }, [searchTerm]);

  return debouncedTerm;
};

export default useDebounce;
