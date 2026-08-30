import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'portfolio'
const basePath = process.env.VITE_BASE_PATH || (process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/portfolio/')

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})