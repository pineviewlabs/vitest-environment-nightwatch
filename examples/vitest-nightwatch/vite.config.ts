/// <reference types="vitest" />
/// <reference types="vitest-environment-nightwatch/types" />
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import nightwatchPlugin from "vite-plugin-nightwatch";
import "vitest-environment-nightwatch/types"

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "nightwatch",
    environmentOptions: { nightwatch: {} },
    // testTimeout: 60_000,
    // hookTimeout: 60_000,
  },

  plugins: [vue(), nightwatchPlugin()],
});
