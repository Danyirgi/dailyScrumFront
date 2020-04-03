import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Scrum from '../views/Scrum.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Navbar from '../views/layouts/Navbar.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Scrum',
    name: 'Scrum',
    components: {default: Scrum, header: Navbar}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
