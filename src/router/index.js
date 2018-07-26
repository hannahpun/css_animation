import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/Homepage')
    },
    {
      path: '/page1',
      component: () => import('@/pages/Page1')
    },
    {
      path: '/page2',
      component: () => import('@/pages/Page2')
    },
    {
      path: '/page3',
      component: () => import('@/pages/Page3')
    },
    {
      path: '/done',
      component: () => import('@/pages/Done')
    }
  ]
})
