import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    lib: {
      name: 'EcoUI',
      fileName: 'ecommerce-ui',
      entry: resolve(__dirname, 'lib/main.ts'),
    },
  },
  define: { 'process.env.NODE_ENV': '"production"' },
});
