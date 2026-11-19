// npm i vue-router bootstrap axios
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

// router
// 폴더 내부에서 import 할 파일명이 index.XXX 형태면 import에서 파일명 생략 가능
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
