import { defineConfig } from "tsup";

export default defineConfig([
  {
    entryPoints: ["src/index.ts"],
    outDir: "dist",
    format: ["esm", "cjs"],
    tsconfig: "./tsconfig.json",
    target: "es2018",
    minify: false,
    minifySyntax: true,
    minifyWhitespace: false,
    minifyIdentifiers: true,
    clean: true,
    dts: true,
  },
  {
    entryPoints: ["src/types.ts"],
    format: ["esm", "cjs"],
    outDir: "dist",
    tsconfig: "./tsconfig.json",
    dts: true,
  },
]);
