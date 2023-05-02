import { useIsDarkTheme } from "@/hooks";

import { css } from "@emotion/css";
import { ComponentProps } from "react";

import clsx from "clsx";

interface NavItemProps extends ComponentProps<"a"> {
  styles: {
    containerLight: string;
    childDark: string;
    containerDark: string;
    childLight: string;
  };
}

export function NavItem({ children, styles }: NavItemProps) {
  const isDark = useIsDarkTheme();

  // useEffect(() => {
  //   if (linkRef.current) {
  //     function handleScroll() {
  //       const hash = linkRef.current?.href ?? "";
  //       const element = document.getElementById(hash);
  //       console.log(element);
  //     }
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }
  // }, [linkRef.current]);

  return (
    <button
      className={clsx(
        isDark ? styles.containerDark : styles.containerLight,
        "py-2 group cursor-pointer",
        css({
          transition: "all",
          transitionDuration: "400ms",
          transitionTimingFunction: "ease-out",
          backgroundRepeat: "no-repeat",
          backgroundSize: "0%",

          "&:hover": {
            backgroundSize: "100%",
          },
        })
      )}
    >
      <span
        className={clsx(
          isDark ? styles.childDark : styles.childLight,
          css({
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "0%",

            ".group:hover > &": {
              transitionDuration: "700ms",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
            },
          })
        )}
      >
        {children}
      </span>
    </button>
  );
}
