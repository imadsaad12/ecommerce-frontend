import { useEffect, useState } from "react";

function useBreakpoint(breakpoint) {
  const breakPointToMatch = `(max-width:${breakpoint}px)`;
  const [matches, setMatches] = useState(
    window.matchMedia(breakPointToMatch).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(breakPointToMatch);
    const updateMatches = (event) => setMatches(event.matches);

    mediaQuery.addEventListener("change", updateMatches);

    setMatches(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", updateMatches);
    };
  }, [breakPointToMatch]);

  return matches;
}

export default useBreakpoint;
