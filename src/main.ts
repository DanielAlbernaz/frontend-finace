import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import '@fortawesome/fontawesome-free/js/all'
import { key, store } from './store'

createApp(App).use(store, key).use(router).mount('#app')

