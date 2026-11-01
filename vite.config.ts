import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' makes every asset path relative, so the built site works from
// any folder or sub-path (e.g. https://you.github.io/portfolio/).
export default defineConfig({
  plugins: [react()],
  base: './',
});
