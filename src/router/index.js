import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Theme from '@/pages/Theme'
import HomeDetails from '@/pages/HomeDetails'
import ThemeDetails from '@/pages/ThemeDetails'
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
      path: '/home-details/:post_id',
      name: 'HomeDetails',
      component: HomeDetails
    },
    {
      path: '/theme-details/:post_id',
      name: 'ThemeDetails',
      component: ThemeDetails
    },
    {
      path: '/theme/:theme_id',
      name: 'Theme',
      component: Theme
    },
    {
      path: '/test/:testId',
      name: 'Test',
      component: Test
    }

  ]
})
