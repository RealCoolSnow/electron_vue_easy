/*
 * @Description:
 * @Author: CoolSnow
 * @Date: 2020-05-06 19:04:47
 * @LastEditTime: 2020-09-17 15:20:22
 */
import axios from 'axios'
import store from '../store/'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 请求地址
  timeout: 60000, // request timeout
  withCredentials: true
})
// request interceptor 拦截器
service.interceptors.request.use(config => {
  config.headers.Accept = 'application/vnd.sd.v2+json'
  config.params = {
    ...config.params,
    lang: store.getters.language
  }
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    const data = response.data
    const code = data.code
    if (response.status !== 200) {
      return Promise.reject(response.data)
    }
    if (code === 401 || code === 403) {
      console.log('response->' + code)
    }
    if (code !== 0) {
      // @params config.isExistCode
      // @doc 处理 服务端 特殊返回格式
      // @default false
      if (!response.config.isExistCode) {
        return Promise.reject(response.data)
      }
    }
    return response.data
  }
)
export default service
