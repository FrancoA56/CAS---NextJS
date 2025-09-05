"use client";
import { useEffect, useState } from "react";

export function useIsIOS() {
  const [isIOS, setIsIOS] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const detected = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      setIsIOS(detected);
    }
  }, []);

  return isIOS;
}
