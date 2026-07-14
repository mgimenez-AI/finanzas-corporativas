import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/finanzas-corporativas/',
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: 'Finanzas Corporativas A71', short_name: 'Finanzas A71',
      description: 'Herramienta personal de estudio para Finanzas Corporativas A71.',
      theme_color: '#17324d', background_color: '#f5f2ea', display: 'standalone',
      start_url: '/finanzas-corporativas/#/', scope: '/finanzas-corporativas/'
    },
    workbox: { navigateFallback: 'index.html', globPatterns: ['**/*.{js,css,html,svg,json,woff2}'], cleanupOutdatedCaches: true }
  })],
  test: { environment: 'jsdom', setupFiles: './src/test/setup.ts', css: true }
})
