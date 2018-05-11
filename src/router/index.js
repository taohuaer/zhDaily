import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Details from '@/components/Details'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
