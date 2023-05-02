const container = require("@tailwindcss/container-queries");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/**
 * @type {import("tailwindcss").Config}
 */
module.exports = {
  content: ["./**/*.{ts,tsx}", "!./node_modules/*"],
  darkMode: ["class"],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Switzer", ...defaultTheme.fontFamily.sans],
        digital: "Anton"
      },
      opacity: {
        15: "0.15",
      },
      colors: {
        red: "#ED1C24",
        crayola: "#F99F1C",
        gray: "#B9B9B9",
        lust: "#E1261C",
        jet: "#353535",
        onyx: "#363939",
        "fire-opal": "#E95C55",
        "raisin-black": "#212121",
        "davys-grey": "#5C5C5C",
        "american-green": "#3EAF49",
        "american-silver": "#CBCFD4",
        "chinese-black": "#151515",
        "chinese-silver": "#C8C8C8",
        "spartan-crimson": "#98130C",
        "philippine-gray": "#929292",
        "pine-tree": "#2D2C2C",
        "eerie-black": "#1A1B1D",
        "charleston-green": "#272727",
        "light-gray": "#D7D3D3",
        "light-grey": "#CDD6DA",
        "pastel-orange": "#FFB74A",
        "ghost-white": "#F7F9FD",
        "medium-sea-green": "#40B06B",
        "la-salle-green": "#07702F",
        "north-texas-green": "#009639",
        "rich-black": "#030303",
        "silver-sand": "#C2C2C2",
        "granite-gray": "#636966",
      },
    },
  },
  plugins: [
    container,
    plugin(function ({ addVariant }) {
      addVariant("clump", "@supports (font-size: clamp(1rem,2vw,3rem))");
    }),
  ],
};
