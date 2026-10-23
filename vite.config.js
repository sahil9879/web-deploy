import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({ plugins: [react(),
    base: process.env.VITE_BASE_PATH || "/web-deploy", tailwindcss()] })
