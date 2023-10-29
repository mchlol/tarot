import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/tweak/", // why the word tweak? https://stackoverflow.com/a/75367844
  plugins: [react()],
})
