import { Heading } from "@/partials";
import { Speaker } from "./speaker";

const SPEAKERS = Array.from({ length: 8 }, () => ({
  image: "william-webster-cpa.jpg",
  name: "Theresa Webb",
  title: "Nursing Assistant",
}));

export function Speakers() {
  return (
    <div className="px-4 mx-auto py-16 @container max-w-5xl">
      <Heading className="mb-12 clump:mb-[clamp(2rem,3vw,3rem)]">
        Speakers
      </Heading>
      <section className="grid gap-14 mx-auto @sm:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4">
        {SPEAKERS.map((e, i) => (
          <Speaker key={i} {...e} />
        ))}
      </section>
    </div>
  );
}
