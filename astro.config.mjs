import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  rollupOptions: [
    {
      output: {
        entryFileNames: "entry.[hash].mjs",
        chunkFileNames: "chunks/chunk.[hash].mjs",
        assetFileNames: "assets/asset.[hash][extname]",
      },
    },
  ],
  integrations: [react()],
});
