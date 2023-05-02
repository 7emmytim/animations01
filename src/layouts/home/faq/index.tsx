import { Heading } from "@/partials";
import { FAQS } from "@/constants";
import { Accordion } from "./accordion";

import clsx from "clsx";

export function FAQ() {
  return (
    <section className="px-4 mx-auto py-16 @container max-w-5xl">
      <Heading className="mb-12 clump:mb-[clamp(2rem,3vw,3rem)]">
        Frequently Asked Questions
      </Heading>

      <ul
        className={clsx(
          "max-w-5xl gap-0.5 dark:bg-opacity-25 grid",
          "dark:text-white text-chinese-silver dark:bg-light-grey"
        )}
      >
        {FAQS.map(({ label, content }, idx) => (
          <Accordion key={idx} label={label} count={idx}>
            {content}
          </Accordion>
        ))}
      </ul>

      <address className="max-w-2xl mx-auto mt-5 not-italic font-light text-center text-clamp">
        In event that your question is not answered there, please contact us at{" "}
        <a className="text-pastel-orange" href="mailto:cc@afexnigeria.com">
          cc@afexnigeria.com
        </a>
      </address>
    </section>
  );
}
