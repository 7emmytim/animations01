import { useBreakpoint, useIsDarkTheme } from "@/hooks";
import { Cube } from "./cube";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useMemo, useRef } from "react";

import clsx from "clsx";

export function Landing() {
  const cubeRef = useRef<SVGSVGElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 20vh", "center 35vh"],
  });
  const scrollY = useSpring(scrollYProgress, { damping: 60, stiffness: 120 });

  const breakpoint = useBreakpoint();
  const height = useMemo(() => {
    return subtitleRef.current?.clientHeight || 150;
  }, [subtitleRef.current, breakpoint]);

  const containerMarginBottom = useTransform(
    scrollY,
    [0, 0.65],
    [height - 45, 0]
  );

  // MAIN TEXT KEYFRAMES
  const mainTextOpacity = useTransform(scrollY, [0, 0.3], [1, 0]);
  const mainTextScale = useTransform(scrollY, [0, 0.3], [1, 0.9]);

  // CUBE KEYFRAMES
  const cubeMarginBottom = useTransform(scrollY, [0, 0.85], [0, height + 20]);
  const cubeMarginTop = useTransform(scrollY, [0, 0.85], [250, 0]);
  const cubeHeight = useTransform(scrollY, [0, 0.85], [200, 385]);

  // SUBTITLE KEYFRAMES
  const subtitleOpacity = useTransform(scrollY, [0.7, 1], [0, 1]);
  const subtitleMarginTop = useMotionValue(0);

  // subscribe to scroll progress, then set the subtitle
  // margin-top value to the height of svg element above it
  useMotionValueEvent(scrollY, "change", () => {
    if (cubeRef.current) {
      const { value } = cubeRef.current.height.animVal;
      subtitleMarginTop.set(value + 30);
    }
  });

  const isDark = useIsDarkTheme();
  const content = ["Join", "Discover", "Grow"];
  const lightColor = {
    from: "#030303",
    to: "#929292",
  };
  const darkColor = {
    from: "#FFF",
    to: "#5C5C5C",
  };

  const variants = useMemo(() => {
    return {
      initial: (idx: number) => ({
        color: isDark ? darkColor.to : lightColor.to,
        scale: 0.98,
      }),
      animate: (idx: number) => ({
        color: isDark
          ? [null, darkColor.from, darkColor.from, darkColor.to]
          : [null, lightColor.from, lightColor.from, lightColor.to],
        scale: [0.98, 1, 1, 0.98],
        transition: {
          type: "tween",
          ease: "easeInOut",
          times: [null, 0.2, 1, 1.2],
          repeat: Infinity,
          duration: 2,
          delay: idx * 2,
          repeatDelay: 4,
        },
      }),
    } as any;
  }, [isDark]);

  return (
    <motion.main
      ref={targetRef}
      className="grid items-start max-w-2xl px-4 py-6 mx-auto h-min justify-items-center auto-rows-min gap-14"
      style={{
        marginBottom: containerMarginBottom,
      }}
    >
      <motion.section
        key={+isDark}
        className="grid font-semibold text-[2.5rem] justify-items-center leading-tight"
        initial={{
          display: "grid",
        }}
        style={{
          gridArea: "1/1",
          opacity: mainTextOpacity,
          scale: mainTextScale,
        }}
      >
        {content.map((item, idx) => {
          return (
            <motion.h2
              key={idx}
              variants={variants}
              initial="initial"
              animate="animate"
              custom={idx}
            >
              {item}
            </motion.h2>
          );
        })}
      </motion.section>

      <motion.h3
        ref={subtitleRef}
        initial={{ opacity: 0 }}
        className={clsx(
          "max-w-[680px] text-3xl text-center text-davys-grey h3-clamp"
        )}
        style={{
          opacity: subtitleOpacity,
          gridArea: "1/1",
          alignSelf: "end",
        }}
      >
        A gathering of the industry's brightest minds in Africa,{" "}
        <span className="text-rich-black dark:text-white">
          providing unparalleled solutions to Africa's food system challenges.
        </span>
      </motion.h3>

      <Cube
        ref={cubeRef}
        style={{
          paddingInline: 30,
          marginBottom: cubeMarginBottom,
          marginTop: cubeMarginTop,
          gridArea: "1/1",
          height: "min-content",
          maxHeight: cubeHeight,
        }}
      />
    </motion.main>
  );
}
