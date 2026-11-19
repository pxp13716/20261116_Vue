import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

// portal view 설정
import PortalView from 'portal-vue'

const app = createApp(App)
app.use(PortalView)

app.mount('#app')
