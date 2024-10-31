import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'eventsState2ex',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
