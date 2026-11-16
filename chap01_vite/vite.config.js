import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'company',
  },
  preview: {
    port: 3000,
    open: true,
  }
});
