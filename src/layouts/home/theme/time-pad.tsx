import { ComponentPropsWithoutRef } from "react";
import { zeroPad } from "react-countdown";
import { Flip } from "./flip";

interface TimePadProps extends ComponentPropsWithoutRef<"div"> {
  moment: number;
  period: string;
}
export function TimePad({ moment, period }: TimePadProps) {
  const time = zeroPad(moment);

  return (
    <div className="flex flex-col gap-2 text-center">
      <div
        className="grid grid-flow-col gap-1"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${time.length}, auto)`,
        }}
      >
        {time.split("").map((digit: string, idx) => (
          <Flip key={idx} time={digit} />
        ))}
      </div>

      <h5
        className="text-center clump:text-[clamp(1rem,4vw,1.5rem)] leading-snug text-xl font-extrabold"
        style={{
          fontFamily: "DM Mono",
        }}
      >
        {period}
      </h5>
    </div>
  );
}
