import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        neutral: {
          css: {
            "--tw-prose-placeholder": theme("colors.neutral[300]"),
            "--tw-prose-bullets": theme("colors.neutral[600]"),
            "--tw-prose-invert-placeholder": theme("colors.neutral[400]"),
            "--tw-prose-invert-bullets": theme("colors.neutral[300]"),
            "[data-milkdown-root]": {
              height: "100%",
            },
            "[contenteditable][data-placeholder]::before": {
              content: "attr(data-placeholder)",
              position: "absolute",
              color: "var(--tw-prose-placeholder)",
            },
            "li, li > p": {
              margin: "0 !important",
            }
          },
        },
        invert: {
          css: {
            "--tw-prose-placeholder": "var(--tw-prose-invert-placeholder)",
          }
        }
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
