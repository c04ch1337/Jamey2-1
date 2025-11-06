import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Note: '@vitejs/plugin-react' is not installed in this workspace.
// If you intend to use Vite with React, install it with:
//   npm i -D @vitejs/plugin-react
// For now, proceed without the React plugin to avoid TS resolution errors.
export default defineConfig({
  plugins: [],
  build: {
    target: 'es2022',
    minify: 'esbuild',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  server: {
    hmr: true,
    port: 3000
  },
  esbuild: {
    // Custom esbuild options if needed
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
});
