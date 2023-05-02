import { Figure } from "./figure";
import { useBreakpoint, useIsDarkTheme, useMotionValueState } from "@/hooks";
import { Heading } from "@/partials";
import { when } from "@/helpers";

import { useTransform, motion, useSpring, useScroll } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

import clsx from "clsx";

export function About() {
  const trailerRef = useRef<HTMLSpanElement>(null);

  // ARTICLE ANIMATIONS
  const articleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: revealY } = useScroll({
    target: articleRef,
    offset: ["start 60vh", "end center"],
  });

  // ARTICLE KEYFRAMES
  const articleReveal = useTransform(
    revealY,
    [0.15, 0.75],
    ["100% 0%", "100% 100%"]
  );

  // TRAILER KEYFRAMES
  const mouseSpringPositionX = useSpring(-100, { stiffness: 80 });
  const mouseSpringPositionY = useSpring(-100, { stiffness: 80 });

  useEffect(() => {
    if (trailerRef.current) {
      const { offsetWidth, offsetHeight } = trailerRef.current;

      const updateMousePosition = (e: MouseEvent) => {
        mouseSpringPositionX.set(e.clientX - offsetWidth / 2);
        mouseSpringPositionY.set(e.clientY - offsetHeight);
      };

      window.addEventListener("mousemove", updateMousePosition);
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, [trailerRef.current]);

  // CONTAINER LANDSCAPE ANIMATIONS
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: rowScrollYProgress } = useScroll({
    target: targetRef,
    container: undefined,
    offset: ["start end", "end 60vh"],
  });

  // IMAGE LANDSCAPE KEYFRAMES
  const rowImage = useTransform(
    rowScrollYProgress,
    [0.45, 0.75, 1],
    ["0rem", "1.75rem", "0rem"]
  );
  const rowImageState = useMotionValueState(rowImage);

  // IMAGE LEFT ROTATION KEYFRAMES
  const leftImageRotate = useTransform(
    rowScrollYProgress,
    [0.85, 1],
    ["-15deg", "0deg"]
  );
  const leftImageRotateState = useMotionValueState(leftImageRotate);

  // IMAGE RIGHT ROTATION KEYFRAMES
  const rightImageRotate = useTransform(
    rowScrollYProgress,
    [0.85, 1],
    ["15deg", "0deg"]
  );

  // CONTAINER LANDSCAPE WIDTH
  const containerWidth = useTransform(
    rowScrollYProgress,
    [0.45, 1],
    ["0%", "100%"]
  );
  const containerWidthState = useMotionValueState(containerWidth);

  // CONTAINER LANDSCAPE KEYFRAMES
  const rowContainerPadding = useTransform(
    rowScrollYProgress,
    [0.9, 1],
    ["1.75rem", "0rem"]
  );
  const rowContainerPaddingState = useMotionValueState(rowContainerPadding);

  // CONTAINER ANIMATIONS
  const { scrollYProgress: columnScrollYProgress } = useScroll({
    target: targetRef,
    container: undefined,
    offset: ["start center", "end end"],
  });

  // CONTAINER PORTRAIT ANIMATIONS
  const columnScrollY = useSpring(columnScrollYProgress, {
    stiffness: 50,
    damping: 25,
  });

  // CONTAINER PORTRAIT KEYFRAMES
  const columnContainer = useTransform(
    columnScrollY,
    [0.25, 0.85],
    ["50px", "940px"]
  );
  const columnContainerState = useMotionValueState(columnContainer);

  // CONTAINER PORTRAIT KEYFRAMES
  const columnContainerPadding = useTransform(
    columnScrollY,
    [0, 0.85],
    [400, 0]
  );
  const columnContainerPaddingState = useMotionValueState(
    columnContainerPadding
  );

  const breakpoint = useBreakpoint();
  const isDark = useIsDarkTheme();

  const variants = useMemo(() => {
    return {
      initial: {
        backgroundColor: "#5C5C5C",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 0",
        backgroundImage: `linear-gradient(0deg, transparent, ${
          isDark ? "white" : "#030303"
        } 0%)`,
      },
    };
  }, [isDark]);

  return (
    <div
      id="about"
      ref={targetRef}
      className="grid gap-12 pt-16 mb-16 max-h-min auto-rows-max"
    >
      <section
        ref={articleRef}
        style={{ clipPath: "inset(0 0 0 0)", overflow: "hidden" }}
      >
        <motion.article
          key={+isDark}
          variants={variants}
          className={clsx(
            "grid max-w-2xl px-4 mx-auto text-center justify-items-center",
            "relative grid font-light leading-relaxed text-clamp"
          )}
          initial="initial"
          style={{
            backgroundSize: articleReveal,
          }}
        >
          <Heading className="max-w-xs mb-12 clump:mb-[clamp(2rem,3vw,3rem)]">
            About Code Cash Crop 4.0
          </Heading>
          <p className="mb-8 clump:mb-[clamp(1rem,3vw,2rem)]">
            Code Cash Crop provides a fun space for learning and creating
            solutions to business growth challenges in agriculture. To do this,
            CCC harnesses the intersection of technology, finance, and
            agriculture.
          </p>
          <p>
            The fourth edition of Code Cash Crop will feature a hackathon and an
            industry event focused on the theme: "Scaling Market-led Solutions".
          </p>
        </motion.article>
        {isDark && (
          <motion.span
            ref={trailerRef}
            className="top-0 left-0 hidden dark:bg-white bg-raisin-black md:block"
            initial={{
              height: 50,
              borderRadius: "100%",
              position: "fixed",
              mixBlendMode: "difference",
              pointerEvents: "none",
              width: 50,
            }}
            style={{
              x: mouseSpringPositionX,
              y: mouseSpringPositionY,
            }}
          />
        )}
      </section>

      <motion.section
        layout
        layoutDependency={columnContainer}
        className="grid mx-auto min-w-max justify-items-center gap-y-5 md:text-2xl"
        style={{
          paddingInline: when(breakpoint.md, "30px"),
          paddingBlock: when(breakpoint.md, rowContainerPaddingState),
          width: when(breakpoint.md, containerWidthState),
          maxHeight: when(!breakpoint.md, columnContainerState),
          paddingBottom: when(!breakpoint.md, columnContainerPaddingState),
          maxWidth: 1000,
        }}
      >
        <Figure
          src="/attendees/ccc-3.jpg"
          className="md:justify-self-start"
          style={{
            rotate: leftImageRotate,
          }}
        />

        <Figure
          src="/attendees/ccc-2.jpg"
          className="md:justify-self-end"
          style={{
            rotate: rightImageRotate,
          }}
        />

        <Figure
          src="/attendees/ccc-1.jpg"
          className="md:justify-self-center"
          style={{
            marginTop: when(breakpoint.md, `-${rowImageState}`),
            rotate: when(!breakpoint.md, leftImageRotateState),
          }}
        />
      </motion.section>
    </div>
  );
}
