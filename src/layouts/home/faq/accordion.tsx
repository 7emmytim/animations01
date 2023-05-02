import { Plus } from "./plus";

import { useState } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

import clsx from "clsx";

interface AccordionProps extends HTMLMotionProps<"div"> {
  label: string;
  count: number;
}

export function Accordion({ label, children, count }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      onClick={() => setIsOpen(!isOpen)}
      className={clsx(
        "grid md:grid-cols-[auto_1fr] px-16 py-14 gap-14 items-start auto-rows-max dark:text-white",
        "justify-items-stretch dark:bg-charleston-green text-charleston-green clump:gap-[clamp(1rem,5vw,3.5rem)]",
        "clump:px-[clamp(1.5rem,5vw,4rem)] clump:py-[clamp(1rem,5vw,3.5rem)] cursor-pointer"
      )}
    >
      <h5 className="text-5xl font-bold clump:text-[clamp(2rem,5vw,3rem)]">
        {String(++count).padStart(2, "0")}
      </h5>
      <section>
        <div className="flex justify-between gap-3 group">
          <h3 className="text-[2rem] clump:text-[clamp(1.25rem,3vw,2rem)] font-medium">
            {label}
          </h3>
          <motion.div
            className={clsx(
              "relative grid flex-shrink-0 w-12 h-12 rounded-full duration-100",
              "clump:w-[clamp(2rem,5vw,3rem)] clump:h-[clamp(2rem,5vw,3rem)]",
              isOpen
                ? "dark:bg-north-texas-green bg-chinese-silver"
                : "dark:bg-white bg-american-green"
            )}
          >
            <Plus
              className={clsx(
                "absolute text-[2rem] clump:text-[clamp(1.5rem,3vw,2rem)]",
                isOpen
                  ? "dark:text-white text-charleston-green"
                  : "dark:text-north-texas-green text-white"
              )}
              animate={{
                rotate: isOpen ? 45 : 0,
                translateY: "-50%",
                translateX: "-50%",
                left: "50%",
                top: "50%",
              }}
            />
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.p
              initial={{ height: 0, marginTop: 0 }}
              className={clsx(
                "font-light text-2xl clump:text-[clamp(1.125rem,3vw,1.5rem)]",
                "mt-6 clump:mt-[clamp(1rem,2vw,1.5rem)]"
              )}
              animate={{
                height: "auto",
                marginTop: 24,
              }}
              exit={{ height: 0, marginTop: 0 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              style={{
                overflow: "hidden",
              }}
            >
              {children}
            </motion.p>
          )}
        </AnimatePresence>
      </section>
    </li>
  );
}
