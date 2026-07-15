import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/finanzas-corporativas/',
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    manifest: {
      name: 'Finanzas Corporativas A71', short_name: 'Finanzas A71',
      description: 'Herramienta personal de estudio para Finanzas Corporativas A71.',
      theme_color: '#17324d', background_color: '#f5f2ea', display: 'standalone',
      start_url: '/finanzas-corporativas/#/', scope: '/finanzas-corporativas/', lang: 'es',
      icons: [
        { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
        { src: 'pwa-maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
      ]
    },
    workbox: { navigateFallback: 'index.html', globPatterns: ['**/*.{js,css,html,svg,json,woff2}'], cleanupOutdatedCaches: true }
  })],
  test: { environment: 'jsdom', setupFiles: './src/test/setup.ts', css: true }
})
