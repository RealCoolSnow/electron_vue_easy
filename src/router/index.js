/*
 * @Description:
 * @Author: CoolSnow (coolsnow2020@gmail.com)
 * @Date: 2020-09-17 14:42:18
 * @LastEditors: CoolSnow
 * @LastEditTime: 2020-09-17 15:16:52
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'
Vue.use(Router)

const createRouter = () => new Router({
  mode: 'history',
  base: '',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
const router = createRouter()

// 路由加载之前
router.beforeEach((to, form, next) => {
  next()
})
export default router
