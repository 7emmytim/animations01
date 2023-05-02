import { MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

import debounce from "lodash.debounce";

type MotionValueState = number | string;

export function useMotionValueState<D = MotionValueState>(
  value: MotionValue,
  lag: number = 10
): D {
  const [state, setState] = useState(value.get());

  useEffect(() => {
    value.on("change", debounce(setState, lag));
    return () => value.clearListeners();
  }, []);

  return state;
}
