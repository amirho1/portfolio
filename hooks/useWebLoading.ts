import { useEffect, useState } from "react";

/**
 * Keep the initial loading overlay visible briefly after the window loads.
 * @returns Whether the loading overlay should remain visible.
 */
export default function useWebLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(function watchWindowLoad() {
    /** Finish the visual loading sequence. */
    function finishLoading() {
      window.setTimeout(function hideLoadingOverlay() {
        setLoading(false);
      }, 500);
    }

    if (document.readyState === "complete") {
      finishLoading();
      return;
    }

    window.addEventListener("load", finishLoading);

    return function stopWatchingWindowLoad() {
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  return loading;
}
