"use client";

import { useEffect, useRef, useState } from "react";

export default function useScrollReveal(options = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.15, rootMargin = "0px 0px -40px" } = options;

  useEffect(() => {
    const element = elementRef.current;

    if (!element || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible, rootMargin, threshold]);

  return { elementRef, isVisible };
}
