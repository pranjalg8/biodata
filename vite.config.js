import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isBeta = process.env.App_BUILD_TARGET === 'beta'
  return {
    plugins: [react()],
    base: isBeta ? '/biodata/beta/' : '/biodata/',
  }
})
