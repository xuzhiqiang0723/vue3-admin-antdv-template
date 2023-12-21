import App from './App.vue'
import { createApp } from 'vue'
import Icon from './components/Icon'
import '@/styles/main.less'
import router from '@/router/index.js'
import directive from './directive'

const app = createApp(App)
app.use(Icon)
app.use(router)
app.use(directive)

app.mount('#app')
