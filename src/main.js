import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false
Vue.use(iview)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
