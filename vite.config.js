import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  base: '/Laserplusesthetics/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(
        new URL('./src/components', import.meta.url),
      ),
      '@assets': fileURLToPath(
        new URL('./src/assets', import.meta.url),
      ),
      '@pages': fileURLToPath(
        new URL('./src/pages', import.meta.url),
      ),
      '@hooks': fileURLToPath(
        new URL('./src/hooks', import.meta.url),
      ),
    },
  },
});
