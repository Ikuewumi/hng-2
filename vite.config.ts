import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import path from 'path'

const __dirname = path.dirname(".");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@composables': path.resolve(__dirname, './src/composables'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@scss': path.resolve(__dirname, './src/scss'),
      '@types': path.resolve(__dirname, './src/types')
    }
  },

})
