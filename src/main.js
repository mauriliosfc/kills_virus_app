import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueSession from 'vue-session'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSidebarMenu from 'vue-sidebar-menu'

import * as VueGoogleMaps from 'vue2-google-maps'


import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDtPGwMnmHDeMgZ0RUoVyHRNiuNx5KBfvY',
    libraries: 'places', // This is required if you use the Autocomplete plugin  
  },
})
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSidebarMenu)

Vue.use(VueSession)

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost',
  headers: { 'X-Custom-Header': 'foobar' }
})

Vue.config.productionTip = false

new Vue({
  router,  
  render: h => h(App)
}).$mount('#app')
