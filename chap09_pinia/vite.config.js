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
    /*
      상대패스로 파일 참조를 절대 참조로 변경해서 사용하고자 하는 경우
      ./../../../../../components/Todo.vue => @components/Todo.vue

      jsconfig.json에도 같은 이름으로 추가해 주어야 한다
      ctrl + path => 파란색 밑줄 표시, 선택하면 파일 표시되도록 처리
      추가하지 않으면 경로 참조는 가능(OK). 위의 패스 선택은 적용되지 않는다
    */
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  build: {
    sourcemap: true,        // build 후 결과에서 에러 확인
  },
  preview: {
    open: true,
  }
})
