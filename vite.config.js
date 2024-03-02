// vite.config.(js|ts)
import { defineConfig } from 'vite';
import vitePugPlugin from 'vite-plugin-pug-transformer';
import path from 'path';

export default defineConfig({
  plugins: [vitePugPlugin()],
  root: path.join(__dirname, '/'),
  build: {
    outDir: './dist',
  },
});
