import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import axios from '@/plugins/axiosInstance.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
app.config.globalProperties.$axios=axios;  //配置axios的全局引用