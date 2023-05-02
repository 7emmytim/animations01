import { CHALLENGES } from "@/constants";
import { Logo, NavItem, Navigation } from "@/partials";
import { Challenges } from "./challenges";

import { css } from "@emotion/css";

import Link from "next/link";
import Head from "next/head";
import clsx from "clsx";

const styles = {
  childLight: css({
    backgroundColor: "#F7F9FD",
    ".group:hover > &": {
      backgroundImage: `linear-gradient(90deg, transparent, white 0%)`,
    },
  }),
  childDark: css({
    backgroundColor: "#F7F9FD",
    ".group:hover > &": {
      backgroundImage: `linear-gradient(90deg, transparent, white 0%)`,
    },
  }),
  containerLight: css({
    "&:hover": {
      backgroundImage: `linear-gradient(180deg, transparent 95%, white 95%)`,
    },
  }),
  containerDark: css({
    "&:hover": {
      backgroundImage: `linear-gradient(180deg, transparent 95%, white 95%)`,
    },
  }),
};

export function AgHackathon() {
  return (
    <>
      <Head>
        <title>AFEX | Ag-hackathon</title>
      </Head>
      <header className="grid gap-8 mt-12 justify-items-center">
        <Link href="/">
          <Logo className="text-white" />
        </Link>
        <Navigation>
          {Object.keys(CHALLENGES).map((title) => (
            <Link
              key={title}
              href={{
                query: { challenge: title.toLowerCase() },
              }}
            >
              <NavItem styles={styles}>The {title} Challenge</NavItem>
            </Link>
          ))}
        </Navigation>
      </header>
      <h1
        className={clsx(
          "font-semibold leading-snug text-center text-5xl clump:text-[clamp(1.85rem,4vw,3rem)]",
          "my-24 max-w-md mx-auto clump:my-[clamp(2rem,7vw,6rem)] mt-3 text-white px-4"
        )}
      >
        The AgHackathon Challenge
      </h1>
      <Challenges />
      <div
        className={clsx(
          "flex flex-col flex-wrap gap-2 place-content-center sm:flex-row",
          "px-4 mt-16 clump:mt-[clamp(1rem,5vw,4rem)] mb-36 clump:mb-[clamp(2rem,9vw,9rem)]"
        )}
      >
        <a
          className="contents"
          href="https://drive.google.com/file/d/18CZmSc9pZv5Q5VH_ciuBWE8vxFWAhPlG/view"
          target="_blank"
        >
          <button
            className={clsx(
              "flex w-full sm:w-auto gap-5 p-3 text-xl clump:text-[clamp(1rem,2vw,1.25rem)] bg-gray",
              "bg-gradient-to-br from-5% to-90% from-granite-gray to-philippine-gray",
              "text-center uppercase rounded-lg place-content-center text-white cursor-pointer",
              css({
                backgroundColor: "#353535",
                backgroundPosition: "center 120%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

                ":hover": {
                  backgroundPosition: "center 0%",
                  transition:
                    "background-position 1s cubic-bezier(.39,.575,.565,1)",
                  backgroundImage: `url("/buttons/green-glob.svg")`,
                },
              })
            )}
          >
            DOWNLOAD CHALLENGE DOCUMENT
          </button>
        </a>
        <a
          className="contents"
          href="https://africaexchange.typeform.com/to/W9FZCSOZ"
          target="_blank"
        >
          <button
            className={clsx(
              "flex w-full sm:w-auto gap-5 p-3 text-xl clump:text-[clamp(1rem,2vw,1.25rem)]",
              "bg-gradient-to-br from-5% to-90% from-red to-spartan-crimson text-white",
              "text-center uppercase rounded-lg place-content-center cursor-pointer",
              css({
                backgroundColor: "#353535",
                backgroundPosition: "center 120%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

                ":hover": {
                  backgroundPosition: "center 0%",
                  transition:
                    "background-position 1s cubic-bezier(.39,.575,.565,1)",
                  backgroundImage: `url("/buttons/red-glob.svg")`,
                },
              })
            )}
          >
            SEND PROPOSAL
          </button>
        </a>
      </div>
    </>
  );
}
