import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

// axios 설정
import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 5000
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 요청 인터셉터 추가
axios.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전에 수행할 일
    // ...
    return config
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    // ...
    return Promise.reject(error)
  },
)

// 응답 인터셉터 추가 - 로그인 토큰 처리
axios.interceptors.response.use(
  function (response) {
    // 응답 데이터를 가공
    // ...
    return response
  },
  function (error) {
    // 오류 응답을 처리
    // ...
    return Promise.reject(error)
  },
)

createApp(App).mount('#app')
