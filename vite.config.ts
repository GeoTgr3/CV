import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    base: '/CV/', // <-- Replace with your GitHub repo name

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
