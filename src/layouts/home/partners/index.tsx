import { PAST_PARTNERS } from "@/constants";
import { Heading } from "@/partials";

import Image from "next/image";

export function Partners() {
  return (
    <div
      id="partners"
      className="px-4 py-20 transition-colors hover:bg-white group dark:bg-light-gray dark:hover:bg-white"
    >
      <Heading className="mb-16 clump:mb-[clamp(3rem,4vw,4rem)] group-hover:text-pine-tree text-raisin-black">
        Partners from CCC 3.0
      </Heading>
      <section className="flex flex-wrap max-w-5xl mx-auto place-content-center place-items-center gap-14 clump:gap-[clamp(1.5rem,5vw,3.5rem)]">
        {PAST_PARTNERS.map((item) => (
          <a
            key={item.alt}
            className="grayscale group-hover:grayscale-0"
            target="_blank"
            href={item.link}
          >
            <Image
              className="!static max-w-[180px] hover:grayscale max-h-[85px] min-h-[50px] min-w-[100px] object-contain"
              src={item.src}
              alt={item.alt}
              fill
            />
          </a>
        ))}
      </section>
    </div>
  );
}
