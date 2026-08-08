import { useEffect, useState } from "react";

export default function useWebLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const finishLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      finishLoading();
      return;
    }

    window.addEventListener("load", finishLoading);

    return () => window.removeEventListener("load", finishLoading);
  }, []);

  return loading;
}
