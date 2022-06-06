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
          path: '/dashboard/pages/alerts',
          component: () => import('@/views/pages/ProfileD')
        },
        {
          name: 'Profile',
          path: '/dashboard/pages/profile',
          component: () => import('@/views/pages/Profile')
        },
        {
          name: 'Dashboard',
          path: '/dashboard',
          component: () => import('@/views/pages/Medical')
        }
      ]
    },
    {
      path: '/Doctor ',
      redirect: '/Doctor',
      component: () => import('@/layouts/LayoutD'),
      children: [
        {
          name: 'Alerts',
          path: '/Doctor/Tabla',
          component: () => import('@/views/Doctor/Consulta')
        },
        {
          name: 'Profile',
          path: '/Doctor/profile',
          component: () => import('@/views/Doctor/PerfilDoctor')
        },
        {
          name: 'Dashboard',
          path: '/Doctor',
          component: () => import('@/views/Doctor/BuscarPaciente')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'Landing',
      component: () => import('@/views/Landing')
    }
  ]
})
