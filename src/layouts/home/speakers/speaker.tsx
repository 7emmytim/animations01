import { ComponentProps } from "react";

import clsx from "clsx";
import Image from "next/image";

interface SpeakerProps extends ComponentProps<"section"> {
  image: string;
  name: string;
  title: string;
}

export function Speaker(props: SpeakerProps) {
  const { image, name, title, className, ...remainder } = props;
  return (
    <section
      className={clsx("grid gap-5 justify-items-center @container")}
      {...remainder}
    >
      <Image
        fill
        className="object-cover aspect-square !static rounded-[40px] clump:rounded-[clamp(1.5rem,3vw,2.5rem)]"
        src={`/${props.image}`}
        alt="speaker"
      />
      <article className="grid gap-2 text-center">
        <h4 className="max-w-xs text-xl @[12rem]:text-2xl font-medium">
          {props.name}
        </h4>
        <small className="text-sm">{props.title}</small>
      </article>
    </section>
  );
}
