"use client";

import { useEffect } from "react";

export function useMouseGlow() {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Get the mouse position
      const x = event.clientX;
      const y = event.clientY;

      document.documentElement.style.setProperty("--mouse-x", `${x}px`);
      document.documentElement.style.setProperty("--mouse-y", `${y}px`);
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
}
