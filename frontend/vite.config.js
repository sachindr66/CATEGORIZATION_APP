// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://categorization-app-api.vercel.app', // Proxy /api requests to the backend on port 5000
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
