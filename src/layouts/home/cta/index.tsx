import { Button } from "./button";

export function CTA() {
  return (
    <div className="flex flex-wrap max-w-xl gap-3 px-4 mx-auto dark:text-white mt-7 text-rich-black mb-14">
      <Button
        href="https://africaexchange.typeform.com/to/ZzBWAsdL"
        color="red"
      >
        EXHIBIT
      </Button>
      <Button
        href="https://africaexchange.typeform.com/to/ZzBWAsdL"
        color="yellow"
      >
        PARTNER
      </Button>
      <Button href="https://africaexchange.typeform.com/ccc-4" color="green">
        REGISTER
      </Button>
    </div>
  );
}
