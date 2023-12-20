import App from './App.vue'
import { createApp } from 'vue'
import Icon from './components/Icon'

const app = createApp(App)
app.use(Icon)

app.mount('#app')
