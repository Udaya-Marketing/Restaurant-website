"use client";

import { useSyncExternalStore } from "react";

interface CurrentYearProps {
  fallback?: number;
}

const emptySubscribe = () => () => {};

export function CurrentYear({ fallback = 2026 }: CurrentYearProps) {
  const year = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => fallback
  );

  return <>{year}</>;
}
