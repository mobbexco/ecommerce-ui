import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        "finance-widget": "./lib/main.tsx",
      },
      output: {
        format: "iife",
        entryFileNames: "[name].min.js",
      },
    },
  },
});