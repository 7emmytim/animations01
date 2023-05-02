import { motion } from "framer-motion";

import clsx from "clsx";
import { ClockFace } from "./clock-face";
import { usePrevious } from "@/hooks";

interface FlipProps {
  time: string;
}

export function Flip({ time }: FlipProps) {
  const previous = usePrevious(time);

  return (
    <motion.div
      key={time}
      style={{
        display: "grid",
        position: "relative",
        perspectiveOrigin: "50% 50%",
        perspective: "300px",
      }}
      className={clsx(
        "dark:text-white text-jet",
        "will-change-transform", // use to avoid layout shift
        "clump:rounded-[clamp(.4rem,2vw,.75rem)] rounded-xl",
        "clump:w-[clamp(2rem,7rem,4rem)] w-4",
      )}
    >
      <ClockFace
        className="clump:rounded-t-[clamp(.4rem,2vw,.75rem)] rounded-t-xl"
        style={{
          borderBlockEnd: "2px solid currentColor",
          transformOrigin: "center bottom",
          alignContent: "start",
          alignSelf: "start",
        }}
        value={time}
      />
      <ClockFace
        className="clump:rounded-t-[clamp(.4rem,2vw,.75rem)] rounded-t-xl"
        animate={{
          rotateX: -90,
          transition: {
            duration: 0.5,
          },
        }}
        initial={{
          rotateX: 0,
        }}
        style={{
          borderBlockEnd: "2px solid currentColor",
          boxShadow: "0 -2px 2px -2px black",
          transformOrigin: "center bottom",
          alignContent: "start",
          alignSelf: "start",
        }}
        value={previous}
      />
      <ClockFace
        className="clump:rounded-b-[clamp(.4rem,2vw,.75rem)] rounded-b-xl"
        style={{
          borderBlockStart: "2px solid currentColor",
          transformOrigin: "center top",
          alignContent: "end",
          alignSelf: "end",
        }}
        value={previous}
      />

      <ClockFace
        className="clump:rounded-b-[clamp(.4rem,2vw,.75rem)] rounded-b-xl"
        animate={{
          rotateX: 0,
          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        }}
        initial={{
          rotateX: 90,
        }}
        style={{
          borderBlockStart: "2px solid currentColor",
          boxShadow: "0 2px 2px -2px black",
          alignSelf: "end",
          transformOrigin: "center top",
          alignContent: "end",
        }}
        value={time}
      />
    </motion.div>
  );
}
