import Vue from 'vue'
import Router from 'vue-router'

import Index from '../TodoList'
import TestRouter from '../views/TestRouter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/testRouter',
      component: TestRouter
    }
  ]
})
