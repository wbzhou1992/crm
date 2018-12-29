import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Stock from './views/Stock.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/stock',
      name: 'home',
      component: Stock
    }
  ]
})
