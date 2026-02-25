import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },

    backgrounds: {
      default: "bg-secondary",
      values: [
        { name: "bg-primary", value: "#FFFFFF" },
        { name: "bg-secondary", value: "#FAFAFA" },
        { name: "bg-tertiary", value: "#F5F5F5" },
      ],
    },

    viewport: {
      viewports: {
        mobile: { name: "Mobile", styles: { width: "375px", height: "812px" } },
        tablet: { name: "Tablet", styles: { width: "768px", height: "1024px" } },
        desktop: { name: "Desktop", styles: { width: "1280px", height: "900px" } },
        wide: { name: "Wide", styles: { width: "1440px", height: "900px" } },
      },
    },
  },
};

export default preview;
