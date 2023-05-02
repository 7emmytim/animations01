import { TimePad } from "./time-pad";
import { CountdownRendererFn } from "react-countdown";

import Countdown from "react-countdown";
import clsx from "clsx";

const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="items-center gap-5 clump:text-[clamp(2rem,15vw,5rem)] text-7xl flex flex-wrap justify-center">
      <TimePad moment={days} period="DAYS" />
      <TimePad moment={hours} period="HOURS" />
      <TimePad moment={minutes} period="MINUTES" />
      <TimePad moment={seconds} period="SECONDS" />
    </div>
  );
};

export function CountDown() {
  const deadline = new Date("August 12, 2023 00:00:00");
  let millisecondsTillDeadline = Date.parse(String(deadline));

  return (
    <section
      className={clsx(
        " dark:text-chinese-black text-white",
        "dark:bg-white bg-jet",
        "clump:rounded-[clamp(.5rem,2vw,.75rem)] rounded-xl",
        "clump:gap-[clamp(1rem,4vw,2.5rem)] gap-10",
        "grid place-content-center mt-9 max-w-max mx-auto",
        "clump:p-[clamp(1rem,6vw,3.5rem)] p-14"
      )}
    >
      <Countdown renderer={renderer} date={millisecondsTillDeadline} />
      <h2 className="clump:text-[clamp(1rem,2vw,1.875rem)] text-3xl font-medium text-center leading-none">
        to the Grand Finale
      </h2>
    </section>
  );
}
