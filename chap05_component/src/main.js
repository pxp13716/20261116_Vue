import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

// portal view 설정
import PortalView from 'portal-vue'

const app = createApp(App)
app.use(PortalView)

app.config.errorHandler = (err, comp, info) => {
  console.log('----- main -----')
  console.log(err)
  console.log(comp)
  console.log(info)

  // 여기는 return이 없음
}

// 경고 처리
app.config.warnHandler = (warn, comp, info) => {
  console.warn('----- main -----')
  console.warn(warn)
  console.warn(comp)
  console.warn(info)
}

app.mount('#app')
