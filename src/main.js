import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueSession from 'vue-session'

Vue.use(VueSession)

Vue.prototype.$http = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: { 'X-Custom-Header': 'foobar' }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
