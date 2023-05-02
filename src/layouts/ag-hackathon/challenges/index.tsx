import { CHALLENGES } from "@/constants";
import { Accordion } from "./accordion";

import { useRouter } from "next/router";
import clsx from "clsx";

export function Challenges() {
  const { query } = useRouter();
  const { challenge = "data" } = query as Record<string, string>;

  return (
    <section className="grid max-w-5xl gap-px px-4 mx-auto">
      <div className="flex flex-col gap-0.5">
        <p
          className={clsx(
            "dark:bg-lust duration-300 rounded-tr-xl bg-opacity-50 capitalize text-xl",
            "py-3.5 flex-1 grid place-items-center text-center cursor-pointer max-w-max",
            "clump:px-[clamp(1.5rem,5vw,4rem)] text-white bg-philippine-gray"
          )}
        >
          The {challenge.replace(/\b[a-z]/g, (x) => x.toUpperCase())} Challenge
        </p>
        {Object.entries(CHALLENGES).map(([title, info]) => {
          return (
            <div
              key={title}
              className={clsx(
                "dark:bg-transparent bg-rich-black dark:text-white text-chinese-silver",
                "max-w-5xl gap-0.5 grid overflow-auto",
                title.toLowerCase() !== challenge && "hidden"
              )}
            >
              {Object.entries(info).map(([label, content], idx) => {
                return (
                  <Accordion key={idx} label={label}>
                    {content}
                  </Accordion>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
