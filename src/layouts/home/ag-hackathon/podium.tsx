import { SVGMotionProps, motion } from "framer-motion";
import { ForwardedRef, forwardRef } from "react";

function _Podium(
  props: SVGMotionProps<SVGSVGElement>,
  ref: ForwardedRef<SVGSVGElement>
) {
  return (
    <motion.svg
      ref={ref}
      width="121"
      height="65"
      viewBox="0 0 121 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M80.6668 0.200195H40.3335V64.7335H80.6668V0.200195Z"
        fill="#009639"
      />
      <path d="M40.3333 40.5334H0V64.7334H40.3333V40.5334Z" fill="#009639" />
      <path
        d="M40.3332 40.5334H20.1665V64.7334H40.3332V40.5334Z"
        fill="#40B06B"
      />
      <path
        d="M80.6667 0.200195H60.5V64.7335H80.6667V0.200195Z"
        fill="#80CB9C"
      />
      <path d="M121 20.3667H80.6665V64.7334H121V20.3667Z" fill="#009639" />
      <path d="M121 20.3667H100.833V64.7334H121V20.3667Z" fill="#40B06B" />
      <path
        d="M60.4998 48.6001H52.4331V56.6668H60.4998V48.6001Z"
        fill="#FF9811"
      />
      <path d="M68.5667 48.6001H60.5V56.6668H68.5667V48.6001Z" fill="#FFDA44" />
      <path
        d="M20.1668 48.6001H12.1001V56.6668H20.1668V48.6001Z"
        fill="#FF9811"
      />
      <path
        d="M28.2332 48.6001H20.1665V56.6668H28.2332V48.6001Z"
        fill="#FFDA44"
      />
      <path
        d="M100.834 48.6001H92.7671V56.6668H100.834V48.6001Z"
        fill="#FF9811"
      />
      <path d="M108.9 48.6001H100.833V56.6668H108.9V48.6001Z" fill="#FFDA44" />
    </motion.svg>
  );
}

export const Podium = forwardRef<SVGSVGElement, SVGMotionProps<SVGSVGElement>>(
  _Podium
);

Podium.displayName = "Podium";
