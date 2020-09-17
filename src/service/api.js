/*
 * @Description:
 * @Author: CoolSnow
 * @Date: 2020-05-06 19:15:10
 * @LastEditTime: 2020-09-17 15:36:01
 */
import request from '@/service'

export const hello = (params, opts) => request.get('hello', { params, ...opts })
