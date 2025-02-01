import partytown from "@astrojs/partytown";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  integrations: [react()],
});
