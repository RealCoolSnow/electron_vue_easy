/*
 * @Descripttion:
 * @version:
 * @Author: CoolSnow
 * @Date: 2020-04-26 10:05:39
 * @LastEditTime: 2020-09-17 15:47:25
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang'
import axios from 'axios'
import { initLog } from './libs/log'

Vue.prototype.$http = axios
Vue.config.productionTip = false
// 日志系统
initLog()

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
