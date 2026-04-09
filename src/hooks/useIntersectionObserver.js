import { useEffect, useRef, useState } from 'react';

/**
 * useIntersectionObserver
 * Returns a ref and a boolean indicating whether the element is visible.
 * Triggers once (unobserves after first intersection).
 */
export function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -80px 0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return [ref, isVisible];
}

/**
 * useCounterAnimation
 * Animates a numeric counter from 0 to target when triggered.
 */
export function useCounterAnimation(target, duration = 2000, isVisible = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const startValue = 0;
    const endValue = parseFloat(target);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startValue + (endValue - startValue) * eased));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return count;
}
