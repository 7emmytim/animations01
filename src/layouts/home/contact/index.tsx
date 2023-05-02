import { Heading } from "@/partials";
import { Mail } from "./mail";

import { css } from "@emotion/css";
import { useForm, zodResolver } from "@mantine/form";
import { motion } from "framer-motion";
import { FormEvent } from "react";
import { z } from "zod";

import clsx from "clsx";

interface ContactForm {
  email: string;
}

export function Contact() {
  const form = useForm<ContactForm>({
    initialValues: {
      email: "",
    },
    validate: zodResolver(
      z.object({
        email: z
          .string()
          .email({ message: "This is not a valid email format" }),
      })
    ),
    validateInputOnBlur: true,
    clearInputErrorOnChange: true,
  });

  const handleError = () => {};
  const handleSubmit = (
    value: ContactForm,
    evt: FormEvent<HTMLFormElement>
  ) => {
    console.log(value);
  };
  const hasError = (key: keyof ContactForm) => {
    return form.values[key] && form.errors[key];
  };

  return (
    <section
      id="community"
      className="grid max-w-5xl gap-12 clump:gap-[clamp(1.5rem,4vw,3rem)] px-4 pb-16 mx-auto justify-items-center"
    >
      <div className="grid gap-2 justify-items-center">
        <Mail className="text-8xl" />
        <Heading>Join the CCC Community</Heading>
      </div>
      <p className="max-w-3xl font-light text-center text-clamp">
        Join over 1,000 young professionals in the fields of Agriculture,
        finance, and technology in Africa to connect and stay informed on the
        latest CCC updates.
      </p>

      <form
        className="hidden w-full max-w-xl gap-1" // grid
        onSubmit={form.onSubmit(handleSubmit, handleError)}
      >
        <input
          placeholder="Email"
          {...form.getInputProps("email")}
          onFocusCapture={() => form.clearFieldError("email")}
          className={clsx(
            "dark:border-white border-jet border-2 focus:outline-north-texas-green",
            "w-full max-w-xl py-4 text-clamp px-7 rounded-lg bg-transparent",
            {
              "[outline:#E95C55_auto_1px] outline-offset-0": hasError("email"),
            }
          )}
          type="email"
        />
        {hasError("email") && (
          <p className="text-fire-opal">{form.errors.email}</p>
        )}
      </form>

      <a
        className="contents"
        href="https://africaexchange.typeform.com/ccc-4"
        target="_blank"
      >
        <motion.button
          // disabled={!form.values.email}
          className={clsx(
            "enabled:bg-gradient-to-br from-10% to-90% from-medium-sea-green to-la-salle-green text-white",
            "text-xl uppercase clump:text-[clamp(1rem,2vw,1.25rem)] py-4 rounded-xl max-w-[18rem] duration-100 border-transparent",
            "w-full hover:border-north-texas-green dark:border-none border-2 disabled:cursor-not-allowed  disabled:bg-la-salle-green disabled:opacity-90",
            css({
              backgroundPosition: "center 120%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",

              ":not(:disabled):hover": {
                backgroundColor: "#009639",
                backgroundPosition: "center 0%",
                transitionDuration: "1s, 0.3s",
                transitionTimingFunction:
                  "cubic-bezier(.39,.575,.565,1), cubic-bezier(1,.24,.22,1)",
                transitionProperty: "background-position, color",
                backgroundImage: `url("/buttons/white-glob.svg")`,
                color: "#009639",
              },
            })
          )}
        >
          Subscribe
        </motion.button>
      </a>
    </section>
  );
}
