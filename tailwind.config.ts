import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "#64ffda",   // Custom primary color
        secondary: "#8892b0", // Custom secondary color
        bg: "#112240",        // Custom background color
      },
      screens: {
        xsm: "350px",
        xs: "476px",
        sm: "640px",
        md: "768px",
        bs: "900px", // Custom breakpoint
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",

        // **Max-width (mobile-first) breakpoints**
        "2xl-mx": { max: "1535px" },
        "xl-mx": { max: "1279px" },
        "lg-mx": { max: "1023px" },
        "bs-mx": { max: "899px" },
        "md-mx": { max: "767px" },
        "sm-mx": { max: "639px" },
        "xs-mx": { max: "475px" },
        "xsm-mx": { max: "349px" },
      },
    },
  },
};

export default config;
