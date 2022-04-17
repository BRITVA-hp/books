import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import directives from './directives'

const app = createApp(App)
directives(app)
app.use(store)
app.mount('#app')
