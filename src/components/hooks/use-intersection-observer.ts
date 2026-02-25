"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Observes whether an element is intersecting with the viewport.
 * Callers should memoize the options object to avoid unnecessary re-subscriptions.
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit,
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const threshold = options?.threshold;
  const root = options?.root;
  const rootMargin = options?.rootMargin;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, root, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin]);

  return [ref, isIntersecting];
}
