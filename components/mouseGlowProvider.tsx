"use client";

import { useMouseGlow } from "@/hooks/useMouseGlow";

export function MouseGlowProvider({ children }: { children: React.ReactNode }) {
  useMouseGlow();
  return <>{children}</>;
}
