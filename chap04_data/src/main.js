// 1. vite.config.js을 필요에 따라 수정
// 2. eslint.config.js 에 rule 추가 또는 수정
// 3. 파일 formatter로 prettier를 사용하는 경우
//    3.1 prettier 확장 설치 (Prettier - Code formatter)
//    3.2 settings -> Default Formatter를 prettier로 설정
//    3.2 .prettierrc 파일 수정

import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).mount('#app');
