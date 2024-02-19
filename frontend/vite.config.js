import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugin = {
  registerType: 'autoUpdate',
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
      }
    ]
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)]
})
