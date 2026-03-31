import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'PickMaster Twin - Fast Pattern Editor',
        short_name: 'PM FPE',
        description: 'Ein lokaler Editor für PickMaster Twin Container Patterns',
        theme_color: '#2563eb',
        background_color: '#f9fafb',
        display: 'standalone',
      }
    })
  ],
})