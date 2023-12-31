import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [reactRefresh()],
})
