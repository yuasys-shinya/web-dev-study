import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/web-dev-studyweb-dev-study/lesson3/reactProject/vite-react-tailwind/my-project/",
  plugins: [react()]
})
