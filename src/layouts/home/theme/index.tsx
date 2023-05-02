import { Heading } from "@/partials";
import { Rocket } from "./rocket";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { CountDown } from "./countdown";

export function Theme() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end 75vh"],
    container: undefined,
  });
  const scrollY = useSpring(scrollYProgress, { damping: 60, stiffness: 120 });

  // THEME KEYFRAMES
  const themePosition = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    ["30%", "0%"]
  );
  const themeOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);

  // IDEA KEYFRAMES
  const ideaScale = useTransform(scrollY, [0.3, 1], [0.65, 1]);
  const ideaOpacity = useTransform(scrollY, [0.3, 1], [0, 1]);

  // ROCKET KEYFRAMES
  const rocketScale = useTransform(scrollY, [0.3, 0.85], [0.65, 1]);
  const rocketLeftPosition = useTransform(
    scrollY,
    [0.3, 0.85],
    ["-215px", "0px"]
  );
  const rocketBottomPosition = useTransform(
    scrollY,
    [0.3, 0.85],
    ["110px", "0px"]
  );

  // SMOKE KEYFRAMES
  const smokeOpacity = useTransform(scrollY, [0.85, 1], [0, 1]);

  return (
    <article
      ref={targetRef}
      className="grid gap-6 px-4 pt-6 mx-auto dark:text-white"
    >
      <motion.section
        style={{
          opacity: themeOpacity,
          translateY: themePosition,
        }}
        className="text-center text-philippine-gray dark:text-white"
      >
        <h3 className="text-xl font-light">Theme:</h3>
        <Heading>
          Scaling{" "}
          <span className="dark:text-white text-rich-black">Market-led</span>{" "}
          Solutions
        </Heading>
      </motion.section>
      <CountDown />

      <Rocket
        className="max-w-2xl mx-auto"
        style={{
          height: "min-content",
        }}
        idea={{
          initial: {
            scale: 0.65,
            opacity: 0,
          },
          style: {
            gridArea: "1/1",
            justifySelf: "end",
            scale: ideaScale,
            opacity: ideaOpacity,
          },
        }}
        rocket={{
          initial: {
            bottom: 0,
            scale: 0.65,
            left: 0,
          },
          style: {
            gridArea: "1/1",
            position: "absolute",
            transformOrigin: "center",
            translateY: rocketBottomPosition,
            translateX: rocketLeftPosition,
            scale: rocketScale,
          },
        }}
        smoke={{
          initial: {
            opacity: 0,
          },
          style: {
            opacity: smokeOpacity,
          },
        }}
      />
    </article>
  );
}
