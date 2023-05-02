import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

interface HeadingProps extends ComponentPropsWithoutRef<"h2"> {}

export function Heading({ children, className, ...props }: HeadingProps) {
  return (
    <h2
      {...props}
      className={clsx(
        "font-semibold leading-snug text-center h2-clamp",
        className
      )}
    >
      {children}
    </h2>
  );
}
