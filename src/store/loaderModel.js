/*
 * @Description:
 * @Author: CoolSnow
 * @Date: 2020-05-19 11:55:35
 * @LastEditTime: 2020-09-17 14:51:58
 */

const models = {}

function loadStoreModule () {
  const routerModules = require.context('@/pages/', true, /.store.js$/)
  const reg = /modules\/(\S*).store.js/
  routerModules.keys().forEach(path => {
    const matchResult = path.match(reg)[1]
    if (matchResult.length > 0) {
      models[matchResult] = routerModules(path).default
    }
  })
  return models
}

export default loadStoreModule()
