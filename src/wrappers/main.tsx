import { ReactElement } from "react";
import { useIsDarkTheme } from "@/hooks";

interface MainWrapperProps {
  render(props: any): ReactElement;
}

export function MainWrapper(props: MainWrapperProps) {
  const isDark = useIsDarkTheme();
  return (
    <>
      <props.render />
      <div
        className="fixed inset-0 transition-colors duration-300 bg-white -z-10 dark:bg-rich-black"
        style={{
          opacity: isDark ? 0.5 : 0.4,
          backgroundImage: `url(/pages/${
            isDark ? "graffiti-dark" : "graffiti-light"
          }.png)`,
          backgroundSize: "400px",
        }}
      />
    </>
  );
}
