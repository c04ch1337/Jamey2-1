import { defineConfig } from 'vite';
// Note: '@vitejs/plugin-react' is installed but not used.
// If you intend to use Vite with React, add react() to plugins.
// For now, proceed without the React plugin.
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
