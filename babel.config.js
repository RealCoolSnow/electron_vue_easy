/*
 * @Description:
 * @Author: CoolSnow
 * @Date: 2020-05-05 20:59:37
 * @LastEditTime: 2020-05-07 15:30:15
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
