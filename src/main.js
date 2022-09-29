import { createApp } from 'vue'
import App from './App.vue'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import '@/assets/styles/main.css'

createApp(App).use(VueChartkick).mount('#app')
