import { useIsDarkTheme } from "@/hooks";
import { FavIcon, Providers } from "@/wrappers";

import { AnimatePresence, Variants, motion } from "framer-motion";
import type { AppProps } from "next/app";

import Head from "next/head";

import "tailwindcss/tailwind.css";
import "@/styles/index.css";

const DESCRIPTION =
  "Code Cash Crop provides a fun space for learning and creating solutions to business growth challenges in agriculture. To do this, CCC harnesses the intersection of technology, finance and agriculture.";

const variants: Variants = {
  hidden: {
    position: "relative",
    overflow: "hidden",
    height: "0%",
  },
  enter: {
    height: "auto",
  },
  auto: {
    height: [null, "auto"],
    transition: {
      delay: 4,
    },
  },
  "container-start": {
    height: "100vh",
    paddingInline: "30%",
    paddingBlockStart: "70vh",
    paddingBlockEnd: "30vh",
    position: "relative",
    overflow: "hidden",
    display: "grid",
  },
  "container-end": {
    paddingBlockStart: [null, "60vh", "40vh", "0vh"],
    paddingBlockEnd: [null, "20vh", "10vh", "0vh"],
    paddingInline: [null, "20%", "10%", "0%"],
    transition: { times: [0, 0.5, 0.9, 1], delay: 1, duration: 3 },
  },
  "cover-start": { inset: 0, position: "absolute", height: "40%" },
  "cover-end": {
    height: [null, "20%", "0%"],
    transition: { times: [0, 0.4, 1], delay: 1, duration: 2 },
  },
  // enter: {},
  exit: { opacity: 0, transition: { delay: 1 } },
};

function RootLayout({ Component, pageProps }: AppProps) {
  const isDark = useIsDarkTheme();
  return (
    <Providers>
      <Head>
        <title>AFEX | Code.Cash.Crop</title>
        <FavIcon />
      </Head>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={DESCRIPTION} />
      </Head>
      <Head>
        {/* OPEN GRAPH */}
        <meta property="og:title" content="AFEX | Code.Cash.Crop" />
        <meta name="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta name="og:site_name" content="AFEX | Code.Cash.Crop" />
        <meta name="og:locale" content="en-NG" />
      </Head>
      <Head>
        {/* TWITTER */}
        <meta name="twitter:title" content="AFEX | Code.Cash.Crop" />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Component {...pageProps} />
      {/* <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.section
          variants={variants}
          initial="container-start"
          animate={["container-end", "auto"]}
        >
          <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear", duration: 2 }}
          >
            <motion.div
              variants={variants}
              initial="cover-start"
              animate="cover-end"
              className="absolute transition-colors duration-300 bg-white dark:bg-rich-black"
            />
          </motion.div>
          
        </motion.section>
      </AnimatePresence> */}
    </Providers>
  );
}

export default RootLayout;
