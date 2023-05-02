import { useEffect, useState } from "react";

type Breakpoint<T = boolean> = Record<string, T>;

export function useBreakpoint<D extends Breakpoint<number>>(
  override?: D
): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>({});

  const BREAK_POINT = {
    sm: 640, // @media (min-width: 640px)
    md: 768, // @media (min-width: 768px)
    lg: 1024, // @media (min-width: 1024px)
    xl: 1280, // @media (min-width: 1280px)
    "2xl": 1536, // @media (min-width: 1536px)
    ...override,
  };

  interface Reducer {
    (acc: Breakpoint, [key, value]: [keyof D, number]): Breakpoint<boolean>;
  }

  useEffect(() => {
    const handleResize = () => {
      const reducer: Reducer = (acc, [key, value]) => ({
        ...acc,
        [key]: window.innerWidth >= value,
      });
      const points = Object.entries(BREAK_POINT);
      const newBreakpoint = points.reduce(reducer, {} as Breakpoint);
      setBreakpoint(newBreakpoint);
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize on mount to set the initial breakpoint values
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
}
