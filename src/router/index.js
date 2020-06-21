import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import Template from '../components/Template.vue'
import App from "../components/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/registrar',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '',
    components: {
      template: Template
    },
    children: [
      { path: '/app', name: 'adm-home', components: { content: App }}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
