/*
 * @Description:
 * @Author: CoolSnow
 * @Date: 2020-05-06 19:10:48
 * @LastEditTime: 2020-09-17 14:51:26
 */
import Cookies from 'js-cookie'
import {
  getLanguage
} from '@/lang/index'

const state = {
  language: getLanguage()
}

const mutations = {
  SET_LANGUAGE: (state, language) => {
    state.language = language
    Cookies.set('language', language)
  }
}

const actions = {
  setLanguage ({
    commit
  }, language) {
    commit('SET_LANGUAGE', language)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
