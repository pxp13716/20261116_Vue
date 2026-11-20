// 1. vite.config.js 파일 수정
//    alias 설정과 동일하게 jsconfig.js 파일도 설정
// 2. eslint.config.js 파일 설정
// 3. .prettierrc.json 파일 설정
//    npm run format

// npm i bootstrap axios vue-router pinia sweetalert2 p-min-delay 
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router';

// axios의 기본설정
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000';   // '/api'
axios.defaults.timeout = 5000;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app')
