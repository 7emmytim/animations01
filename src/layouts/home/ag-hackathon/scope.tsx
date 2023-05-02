import { ForwardRefExoticComponent, RefAttributes } from "react";
import { motion, SVGMotionProps, HTMLMotionProps } from "framer-motion";

import clsx from "clsx";

import { Map } from "./map";
import { Trophy } from "./trophy";
import { Podium } from "./podium";

export const INFO = [
  {
    icon: Map,
    children: ["3 Bootcamps", "2 countries"],
    heading: "Abuja, Lagos, Nairobi",
  },
  {
    icon: Trophy,
    children: "In cash prizes to be won by winners",
    heading: "$22,000",
  },
  {
    icon: Podium,
    children: "2 finalists per bootcamp",
    heading: "6 Finalists",
  },
];

interface ScopeProps extends HTMLMotionProps<"article"> {
  Icon: ForwardRefExoticComponent<
    SVGMotionProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
  >;
  heading: string;
  children: string | Array<string>;
}

export function Scope({
  heading,
  className,
  children,
  Icon,
  ...rest
}: ScopeProps) {
  return (
    <motion.article
      layout
      className={clsx(
        "dark:border-philippine-gray dark:hover:border-white hover:border-opacity-100 border-opacity-50",
        "group content-center text-center justify-items-center gap-9 min-[712px]:aspect-[1/1.14]",
        "grid max-w-xs basis-80 rounded-[35px] py-11 transition-all duration-300  border-2",
        "text-pine-tree bg-opacity-5 bg-davys-grey border-chinese-silver dark:bg-pine-tree dark:text-white",
        className
      )}
      {...rest}
    >
      <Icon className="duration-300 group-hover:scale-110" />
      <div className="grid gap-4 px-6 clump:gap-[clamp(0.5rem,2vw,1rem)]">
        <h3 className="h2-clamp">{heading}</h3>
        {Array.isArray(children) ? (
          <div className="grid text-center text-clamp">
            {children.map((child, idx) => (
              <p key={idx}>{child}</p>
            ))}
          </div>
        ) : (
          <p className="text-clamp">{children}</p>
        )}
      </div>
    </motion.article>
  );
}
