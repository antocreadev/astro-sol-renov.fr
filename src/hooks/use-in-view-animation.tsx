import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "./use-mobile";

export function useInViewAnimation(
  mobileThreshold: number = 0.05,
  desktopThreshold: number = 0.1
) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: isMobile ? mobileThreshold : desktopThreshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile, mobileThreshold, desktopThreshold]);

  return { isVisible, sectionRef };
}
