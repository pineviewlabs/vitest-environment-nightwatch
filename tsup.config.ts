import {defineConfig} from 'tsup';

export default defineConfig([
  {
    entryPoints: ['src/index.ts'],
    outDir: 'dist',
    format: ['esm', 'cjs'],
    external: ['@nightwatch/vue'],
    tsconfig: './tsconfig.json',
    target: 'es2018',
    minify: false,
    minifySyntax: true,
    minifyWhitespace: false,
    minifyIdentifiers: true,
    clean: true,
    dts: true
  }
]);
