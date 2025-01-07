import { useState, useEffect } from "react";

// hook for use media-screen in JSX Element

export const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches) {
      setMatches(true);
    }

    const listener = (event: any) => setMatches(event.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};
