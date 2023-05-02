import { ComponentProps } from "react";

interface NavigationProps extends ComponentProps<"nav"> {}

export function Navigation(props: NavigationProps) {
  return (
    <nav className="flex flex-wrap justify-center mx-10 clump:mx-[clamp(0.5rem,2vw,2.5rem)] gap-x-7 whitespace-nowrap">
      {props.children}
    </nav>
  );
}
