import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: `/seasonfood`,
  server: {
    host: '0.0.0.0'
  },
  build: {
    outDir: 'build',
  },
  plugins: [react()],
})
