import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ParallaxOptions {
  offset?: [string, string];
  speed?: number;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { offset = ["start start", "end start"], speed = 0.5 } = options;
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + speed * 0.2]);

  return { ref, y, opacity, scale, scrollYProgress };
};

export const useScrollFade = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  return { opacity, y, scrollY };
};

export const useScrollScale = (inputRange: [number, number] = [0, 500], outputRange: [number, number] = [1, 0.8]) => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, inputRange, outputRange);
  return { scale, scrollY };
};
