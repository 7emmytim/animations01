import { useIsDarkTheme } from "@/hooks";
import { HTMLMotionProps, motion } from "framer-motion";

import Image from "next/image";
import clsx from "clsx";

interface ReviewProps extends HTMLMotionProps<"article"> {
  name: string;
  position: string;
  children: string;
  image: string;
}

export function Review({
  name,
  position,
  children,
  image,
  ...props
}: ReviewProps) {
  const { style, className, ...remainder } = props;
  const isDark = useIsDarkTheme();

  return (
    <motion.article
      layout
      className={clsx(
        "flex flex-col items-start h-full gap-4 max-w-lg py-6 bg-white bg-opacity-90",
        "px-8 clump:px-[clamp(1rem,3vw,2rem)] min-[500px]:flex-row text-eerie-black",
        "dark:[background:linear-gradient(0deg,_#F7F6FB,_#F7F6FB)] dark:text-eerie-black",
        className
      )}
      style={{
        boxShadow: isDark
          ? `-8px 8px 40px 5px rgba(0, 0, 0, 0.7)`
          : `-8px 8px 30px 1px rgba(0, 0, 0, 0.2)`,
        borderRadius: 20,
        ...style,
      }}
      {...remainder}
    >
      <Image
        width={70}
        height={70}
        className="flex-shrink-0 object-cover object-top rounded-full"
        src={`/participants/${image}.jpg`}
        alt={`participant - ${name}`}
        style={{
          height: 70,
          width: 70,
        }}
      />
      <section className="grid flex-1 gap-3">
        <div className="grid gap-1 font-semibold">
          <h3 className="h3-clamp">{name}</h3>
          <h4 className="text-sm font-medium text-gray">
            {[position, "CCC 3.0 Ag-Hackathon"].filter(Boolean).join(", ")}
          </h4>
        </div>
        <p className="font-light">{children}</p>
      </section>
    </motion.article>
  );
}
