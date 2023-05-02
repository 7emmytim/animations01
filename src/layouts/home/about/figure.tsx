import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";
import Image from "next/image";

interface FigureProps extends HTMLMotionProps<"figure"> {
  src: string;
}

export function Figure({ src, className, style }: FigureProps) {
  return (
    <motion.figure
      className={clsx(
        "grayscale duration-300 hover:grayscale-0 rounded-[32px]",
        "md:[grid-area:1/1] clump:rounded-[clamp(1rem,3vw,2rem)]",
        className
      )}
      style={{
        position: "relative",
        aspectRatio: "1/1",
        width: "calc(100vw - 20px)",
        maxWidth: 300,
        overflow: "hidden",
        ...style,
      }}
    >
      <Image src={src} className="object-cover" alt="attendees" fill />
    </motion.figure>
  );
}
