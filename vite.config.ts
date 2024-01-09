import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import dotenv from 'dotenv'
// Manually load the environment variables
dotenv.config()


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
