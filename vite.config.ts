import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/fastify-playground-sandpack/',
  plugins: [react()]
})
