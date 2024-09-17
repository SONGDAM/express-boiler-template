import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/server.ts'], // single file
  sourcemap: false,
  clean: true,
  minify: true,
  treeshake: true,
  outDir: 'dist',
});
