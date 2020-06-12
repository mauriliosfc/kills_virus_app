import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueSession from 'vue-session'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

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
