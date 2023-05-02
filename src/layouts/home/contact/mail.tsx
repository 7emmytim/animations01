import { SVGProps } from "react";

export function Mail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 112 112"
      {...props}
    >
      <path
        stroke="#009639"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M102.667 9.334L51.333 60.666M102.667 9.334L70 102.666l-18.666-42L9.334 42l93.333-32.666z"
      />
    </svg>
  );
}
