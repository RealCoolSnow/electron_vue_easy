/*
 * @Description:
 * @Author: CoolSnow
 * @Date: 2020-05-09 16:55:04
 * @LastEditTime: 2020-05-09 19:33:30
 */
import Vue from 'vue'
import Vuex from 'vuex'
import loaderModel from './loaderModel'
import getters from './getters'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules: {
    ...modules,
    ...loaderModel
  },
  getters
})

export default store
