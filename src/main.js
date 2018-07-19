import Vue from 'vue'
import App from './App'
import store from '@/store/store'
import router from './router/router'
import instance from './http'
import 'font-awesome/css/font-awesome.min.css'
import './theme/element-variables.scss'

Vue.config.productionTip = false
Vue.prototype.$axios = instance;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
