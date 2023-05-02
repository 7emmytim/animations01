import { HEADINGS } from "@/constants";
import { Logo, NavItem, Navigation, VerticalLine } from "@/partials";

import { About } from "./about";
import { AgHackathon } from "./ag-hackathon";
import { Contact } from "./contact";
import { CTA } from "./cta";
import { FAQ } from "./faq";
import { Landing } from "./landing";
import { Participants } from "./participants";
import { Partners } from "./partners";
import { Speakers } from "./speakers";
import { Theme } from "./theme";

import { useTheme } from "next-themes";
import { css } from "@emotion/css";

import Link from "next/link";

const styles = {
  childDark: css({
    backgroundColor: "#5C5C5C",
    ".group:hover > &": {
      backgroundImage: `linear-gradient(90deg, transparent, white 0%)`,
    },
  }),
  childLight: css({
    backgroundColor: "#929292",
    ".group:hover > &": {
      backgroundImage: `linear-gradient(90deg, transparent, #212121 0%)`,
    },
  }),
  containerDark: css({
    "&:hover": {
      backgroundImage: `linear-gradient(180deg, transparent 95%, white 95%)`,
    },
  }),
  containerLight: css({
    "&:hover": {
      backgroundImage: `linear-gradient(180deg, transparent 95%, #212121 95%)`,
    },
  }),
};

export function Home() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <header className="grid gap-8 my-12 justify-items-center">
        <Logo
          onClick={() => setTheme(resolvedTheme == "light" ? "dark" : "light")}
          className="dark:text-white text-jet"
        />
        <Navigation>
          {HEADINGS.map(({ title, href }, idx) => (
            <Link
              key={idx}
              href={{
                hash: href,
              }}
            >
              <NavItem styles={styles}>{title}</NavItem>
            </Link>
          ))}
        </Navigation>
      </header>
      <Landing />
      <CTA />
      <VerticalLine />
      <Theme />
      <About />
      <div className="relative">
        <AgHackathon />
        <VerticalLine />
        <Participants />
        <div className="absolute inset-0 dark:bg-raisin-black bg-white mix-blend-screen dark:bg-opacity-40 bg-opacity-0 -z-[5]" />
      </div>
      {/* <Speakers /> */}
      <Partners />
      <FAQ />
      <Contact />
    </>
  );
}
