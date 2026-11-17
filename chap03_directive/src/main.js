import { createApp } from 'vue'
import App from './App.vue'

// 프로젝트 전체에서 사용할 CSS
// npm i bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
// app.use(라우터);
// app.use(스토어);
app.mount('#app')
