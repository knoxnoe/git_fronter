import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'nologin',
      component: () => import('@v/NoLogin')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@v/MainPage')
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@v/Login')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    }
  ]
})
