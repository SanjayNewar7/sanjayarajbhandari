import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  worker: {
    // maplibre-gl loads its vector-tile worker as an ES module worker; without
    // this, the worker silently fails to process GeoJSON sources under Vite's
    // dev server (geojson sources hang forever in a "loading" state).
    format: 'es',
  },
})
