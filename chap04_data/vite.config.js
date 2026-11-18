import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,   // 서버 포트
    open: true,   // 브라우저 자동 오픈
    // proxy 추가
  },
  build: {
    outDir: 'chap04',
    sourcemap: true,    // 빌드된 파일에서 에러 추적 목적으로 사용
  },
  preview: {
    port: 3000,
    open: true,
  }
})
