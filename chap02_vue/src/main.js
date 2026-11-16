// main.js
// 프로젝트 전체에서 사용될 환경 설정을 기술
// 1. 라우터 구성 (SPA)
// 2. 스토어 설정 (전역 상태 변수)
// 3. axios의 기본 설정값
// 4. 프로젝트 전체에서 사용할 CSS 파일 로드
import { createApp } from 'vue'

// 프로젝트 전체에서 참조할 CSS
// import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// 화면에 출력할 View를 담당
import App from './App.vue'

// createApp => App.vue(Vue 문법 파일)을 JavaScript로 변환
// mount => document.getElementById('app')
createApp(App).mount('#app')
