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
      redirect:'/home',
      component:Home,
      children:[
        {
          path:'/home',
          component:Home
        }
      ]
    },
    {
      path: '/stock',
      name: 'stock',
      component: Stock
    }
  ]
})
