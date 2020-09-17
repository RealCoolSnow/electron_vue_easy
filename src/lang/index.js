/*
 * @Description:
 * @Author: CoolSnow
 * @Date: 2020-05-05 21:05:37
 * @LastEditTime: 2020-09-17 14:50:03
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import cnLocale from './cn'
import enLocale from './en'

Vue.use(VueI18n)
const messages = {
  cn: {
    ...cnLocale
  },
  en: {
    ...enLocale
  }
}

export function getLanguage () {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) {
    return chooseLanguage
  }

  // if has not choose language
  // const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  // const locales = Object.keys(messages)
  // for (const locale of locales) {
  //   if (language.indexOf(locale) > -1) {
  //     return locale
  //   }
  // }
  return 'en'
}

const i18n = new VueI18n({
  // set locale
  // options: en | cn
  locale: getLanguage(),
  // set locale messages
  messages
})

export function checkoutLanguage (lang) {
  Cookies.set('language', lang)
  i18n.locale = lang
}
checkoutLanguage(getLanguage())

export default i18n
