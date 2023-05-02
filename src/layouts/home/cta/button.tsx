import { css } from "@emotion/css";
import clsx from "clsx";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"a"> {
  color: string;
}

export function Button({ children, color, href }: ButtonProps) {
  return (
    <a className="contents" href={href} target="_blank">
      <button
        className={clsx(
          "flex w-full gap-5 p-3 text-xl text-center uppercase rounded-lg place-content-center flex-1",
          "dark:bg-silver-sand bg-davys-grey hover:text-white dark:bg-opacity-15 bg-opacity-15",
          css({
            backgroundPosition: "center 120%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

            ":hover": {
              backgroundPosition: "center 0%",
              transition:
                "background-position 1s cubic-bezier(.39,.575,.565,1)",
              backgroundImage: `url("/buttons/${color}-glob.svg")`,
            },
          })
        )}
      >
        {children}
      </button>
    </a>
  );
}
