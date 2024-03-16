import { useEffect, useState } from "react";

export function useIsVisible(
  ref: React.MutableRefObject<HTMLUListElement | null>,
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const { current } = ref;
    if (current === null) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });
    observer.observe(current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
