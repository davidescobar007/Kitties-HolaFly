/* eslint-disable simple-import-sort/imports */
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './test.setup.ts',
    coverage: {
      reporter: ['html'],
      provider: 'istanbul',
    },
  },
  plugins: [react()],
  server: {
    host: true,
  },
});
