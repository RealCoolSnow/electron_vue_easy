/*
 * @Description:
 * @Author: CoolSnow
 * @Date: 2020-05-19 11:48:07
 * @LastEditTime: 2020-05-20 15:11:03
 */

import DEVELOP_ROUTER_MODULE from '@/router/router_module'

// 路由集合
const routes = [
]

// 导出常规路由
export default routes.concat(loadRouterModule())

/**
 *  加载路由模块
 */
function loadRouterModule () {
  // 注册开发配置下的路由模块
  let routerModules = DEVELOP_ROUTER_MODULE
  const routers = []
  const requireAll = context => context.keys().map(context)
  if (process.env.NODE_ENV === 'production') {
    routerModules = [require.context('@/pages/', true, /router\.js$/)]
  }
  for (const rcModule of routerModules) {
    requireAll(rcModule).forEach(({
      default: item
    }) => {
      routers.push(...item)
    })
  }
  return routers
}
