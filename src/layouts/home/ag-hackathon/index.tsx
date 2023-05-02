import { Heading } from "@/partials";
import { INFO, Scope } from "./scope";

import { Variants, motion } from "framer-motion";
import { css } from "@emotion/css";

import clsx from "clsx";
import Link from "next/link";

const variants: Variants = {
  animate: {
    x: 20,
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.3,
      duration: 0.8
    }
  },
};

export function AgHackathon() {
  return (
    <div
      id="ag-hackathon"
      className="grid mx-4 py-16 gap-y-32 @container clump:gap-y-[clamp(2.5rem,9vw,8rem)]"
    >
      <section className="grid max-w-2xl mx-auto text-center auto-rows-min justify-items-center gap-y-8">
        <div className="mx-4">
          <Heading className="mb-12 clump:mb-[clamp(2rem,3vw,3rem)]">
            The AgHackathon Challenge
          </Heading>
          <p className="font-light leading-relaxed text-clamp">
            Do you have what it takes to provide innovative and market-led
            solutions that will make a real-world impact and scale food system
            efficiency?
          </p>
        </div>

        <Link href="/ag-hackathon">
          <motion.button
            whileHover="animate"
            className={clsx(
              "flex items-center p-4 gap-1 text-xl uppercase rounded-xl pr-0",
              "bg-gradient-to-br from-5% to-90% from-red to-spartan-crimson",
              "w-full @[18rem]:w-auto justify-between group text-white",
              // "hover:from-fire-opal hover:to-red hover:to-100%"
              css({
                overflow: "hiddden",
                backgroundPosition: "center 120%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

                ":hover": {
                  backgroundColor: "#98130C",
                  backgroundPosition: "center 0%",
                  transition:
                    "background-position 1s cubic-bezier(.39,.575,.565,1)",
                  backgroundImage: `url("/buttons/pink-glob.svg")`,
                },
              })
            )}
          >
            <span className="clump:text-[clamp(1rem,2vw,1.25rem)]">
              click here for more
            </span>
            <motion.svg
              width="30"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              // className="overflow-hidden"
            >
              <motion.path
                variants={variants}
                d="M0.0254936 10.5938L4.61924 6L0.0254936 1.40625L1.43174 0L7.43174 6L1.43174 12L0.0254936 10.5938Z"
                fill="white"
              />
            </motion.svg>
          </motion.button>
        </Link>
      </section>

      <motion.section
        layout
        transition={{
          layout: {
            duration: 1.5,
          },
        }}
        className="w-full gap-6 mx-auto"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {INFO.map(({ icon, children, heading }, idx) => (
          <Scope key={idx} Icon={icon} heading={heading}>
            {children}
          </Scope>
        ))}
      </motion.section>
    </div>
  );
}
