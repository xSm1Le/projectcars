import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugin = {
  registerType: 'promt',
  includeAssets: ['favicon.icon', 'apple-touc-icon.png', 'masked-icon.png'],
  manifest: {
    name: 'Project Cars',
    short_name: 'Project Cars',
    description: 'eine Fahrzeugverwaltungsapp',
    icons: [
      {
        src: './pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: './pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: './pwa-maskable-192x192.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: './pwa-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: './apple-touch-icon.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: './favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        src: './favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      }
    ]
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)]
})
