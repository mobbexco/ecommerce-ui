import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: Infinity,
    rollupOptions: {
      input: {
        "plans-configurator": "./lib/PlansConfigurator/main.tsx",
      },
      output: {
        format: "iife",
        entryFileNames: "[name].min.js",
      },
    },
  },
});