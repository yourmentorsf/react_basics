import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

import dotenv from 'dotenv'
// Manually load the environment variables
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@cmp',
        replacement: fileURLToPath(
          new URL('./src/components', import.meta.url)
        ),
      },
      {
        find: '@ast',
        replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
      {
        find: '@lts',
        replacement: fileURLToPath(new URL('./src/layouts', import.meta.url)),
      },
      {
        find: '@pgs',
        replacement: fileURLToPath(new URL('./src/pages', import.meta.url)),
      },
      {
        find: '@hks',
        replacement: fileURLToPath(new URL('./src/hooks', import.meta.url)),
      },
      {
        find: '@tps',
        replacement: fileURLToPath(new URL('./src/types', import.meta.url)),
      },
    ],
  },
})
