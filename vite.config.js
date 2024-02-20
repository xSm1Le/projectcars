import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugin = {
  registerType: 'promt',
  includeAssets: ['favicon.icon', 'apple-touc-icon.png', 'mask-icon.png'],
  manifest: {
    name: 'Project Cars',
    short_name: 'Project Cars',
    description: 'eine Fahrzeugverwaltungsapp',
    theme_color: '#406E8E',
    background_color: '#161925',
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
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: './pwa-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: './apple-touch-icon.png',
        sizes: '180x180',
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
    ],
    start_url: '/',
    display: 'standalone',
    scope: '/',
    orientation: 'portrait-primary',	
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)]
})