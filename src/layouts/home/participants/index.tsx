import { when } from "@/helpers";
import { useBreakpoint, useMotionValueState } from "@/hooks";
import { Heading } from "@/partials";
import { Review } from "./review";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function Participants() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { md } = useBreakpoint();
  const { scrollYProgress } = useScroll({
    container: undefined,
    target: targetRef,
    offset: ["start 85vh", "end 80vh"],
  });

  // CONTAINER
  const containerPadding = useTransform(scrollYProgress, [0.35, 1], [128, 64]);
  const containerPaddingState = useMotionValueState(containerPadding);

  // FIRST REVIEW
  const firstReviewY = useTransform(scrollYProgress, [0.35, 1], [180, 0]);
  const firstReviewYState = useMotionValueState(firstReviewY);

  // SECOND REVIEW
  const secondReviewX = useTransform(scrollYProgress, [0.35, 1], [-150, 0]);
  const secondReviewXState = useMotionValueState(secondReviewX);

  // THIRD REVIEW
  const thirdReviewX = useTransform(scrollYProgress, [0.35, 1], [50, 0]);
  const thirdReviewXState = useMotionValueState(thirdReviewX);
  const thirdReviewY = useTransform(scrollYProgress, [0.35, 1], [150, 0]);
  const thirdReviewYState = useMotionValueState(thirdReviewY);
  const thirdReviewScale = useTransform(scrollYProgress, [0.35, 1], [0.9, 1]);
  const thirdReviewScaleState = useMotionValueState(thirdReviewScale);

  // FOURTH REVIEW
  const fourthReviewScale = useTransform(scrollYProgress, [0.35, 1], [1.15, 1]);
  const fourthReviewScaleState = useMotionValueState(fourthReviewScale);

  return (
    <motion.section
      id="testimonials"
      ref={targetRef}
      className="grid py-16 mx-auto auto-rows-max justify-items-center"
      style={{
        paddingBlockEnd: when(md, containerPaddingState),
      }}
    >
      <Heading className="mb-16 clump:mb-[clamp(3rem,4vw,4rem)] mx-4">
        What past participants have to say
      </Heading>

      <div className="grid justify-center w-full max-w-5xl gap-4 px-4 md:grid-cols-2">
        <Review
          name="Folasewa Abdulsalam"
          position="1st Runner-Up"
          image="folasewa-abdulsalam"
          style={{
            y: when(md, firstReviewYState),
            zIndex: 2,
          }}
        >
          It was an awesome experience. Thank you AFEX for believing in the
          younger generation.
        </Review>
        <Review
          name="Samuel Akeme"
          position="2nd Runner-Up"
          image="samuel-akeme"
          style={{
            x: when(md, secondReviewXState),
            zIndex: 3,
          }}
        >
          It was a fantastic event, believe me. I learned a lot about
          sustainable agriculture from experienced professionals across
          industries by leveraging technology, finance, and agriculture.
        </Review>
        <Review
          name="Abubakar Sadiq Amao"
          position=""
          image="abubakar-sadiq-amao"
          style={{
            x: when(md, thirdReviewXState),
            y: when(md, thirdReviewYState),
            scale: when(md, thirdReviewScaleState),
            zIndex: 1,
          }}
        >
          Code Cash Crop 3.0, put myself and my solution on a big stage and
          showcased me to Nigeria. I am grateful for that.
        </Review>
        <Review
          name="Prince Achoja"
          position="Winner"
          image="prince-achoja"
          style={{
            scale: when(md, fourthReviewScaleState),
            transformOrigin: "bottom right",
            zIndex: 4,
          }}
        >
          I have always wanted to build solutions that relate to the fintech
          style. I appreciate the entire AFEX team for putting together a
          wonderful platform to identify young people in the Agrotech community
          and sector.
        </Review>
      </div>
    </motion.section>
  );
}
