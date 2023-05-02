import { ReactElement } from "react";

import { css } from "@emotion/css";
import clsx from "clsx";

interface ChallengeWrapperProps {
  render(props: any): ReactElement;
}

export function ChallengeWrapper(props: ChallengeWrapperProps) {
  return (
    <>
      <props.render />
      <div
        className={clsx(
          "fixed inset-0 transition-colors duration-300 -z-10 dark:bg-black bg-ghost-white",
          css({
            "::before": {
              position: "absolute",
              content: '""',
              zIndex: -1,
              height: "70vh",
              width: "100%",
              backgroundImage: "url(/pages/city-lights.jpeg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            },
          }),
          css({
            "::before": {
              position: "absolute",
              content: '""',
              zIndex: -1,
              height: "70vh",
              width: "100%",
              backgroundImage: "url(/pages/city-lights.jpeg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            },
          })
        )}
      />
    </>
  );
}
