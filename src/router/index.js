import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      redirect: '/dashboard',
      component: () => import('@/layouts/Layout'),
      children: [
        {
          name: 'Alerts',
          path: 'dashboard/alerts',
          component: () => import('@/views/pages/ProfileD')
        },
        {
          name: 'Profile',
          path: 'dashboard/profile',
          component: () => import('@/views/pages/Profile')
        },
        {
          name: 'Dashboard',
          path: '/dashboard',
          component: () => import('@/views/Dashboard')
        }
      ]
    },
    {
      path: '/',
      name: 'landing',
      component: () => import('@/views/landing')
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    
  ]
})
