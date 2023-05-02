import { useIsDarkTheme } from "@/hooks";
import clsx from "clsx";
import {
  HTMLMotionProps,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useRef } from "react";

interface VerticalLineProps extends HTMLMotionProps<"hr"> {}

export function VerticalLine(props: VerticalLineProps) {
  const targetRef = useRef<HTMLHRElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 70vh", "end center"],
  });

  // VERTICAL LINE KEYFRAMES
  const verticalSize = useTransform(
    scrollYProgress,
    [0, 1],
    ["100% 0%", "100% 100%"]
  );

  const isDark = useIsDarkTheme();

  const style = useMemo(() => {
    return {
      backgroundColor: isDark ? "#5C5C5C" : "#B9B9B9",
      backgroundSize: verticalSize,
      backgroundImage: "linear-gradient(0deg, transparent, #FFB74A 0%)",
      backgroundRepeat: "no-repeat",
      ...props.style,
    };
  }, [isDark]);

  const variants = useMemo(() => {
    return {
      initial: {
        backgroundSize: "100% 0",
      },
    };
  }, [isDark]);

  return (
    <motion.hr
      ref={targetRef}
      variants={variants}
      initial="initial"
      style={style}
      className={clsx("w-0.5 h-56 border-t-0 mx-auto", props.className)}
    />
  );
}
