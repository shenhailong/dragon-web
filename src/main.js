/*
 * @page: 页面-
 * @Author: Dragon
 * @Date: 2021-10-12 14:20:55
 * @LastEditors: Dragon
 * @LastEditTime: 2021-10-12 15:39:05
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
