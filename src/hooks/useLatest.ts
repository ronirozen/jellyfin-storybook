import { useEffect, useRef } from "react";

export function useLatest<T>(value: T): T {
  const latest = useRef<T>(value);

  useEffect(() => {
    if (value !== undefined && value !== null) {
      latest.current = value;
    }
  }, [value]);

  return value ?? latest.current;
}
