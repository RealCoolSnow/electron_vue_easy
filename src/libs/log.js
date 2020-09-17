import { Config } from './config'

/*
 * @Description:
 * @Author: CoolSnow
 * @Date: 2020-06-18 23:02:36
 * @LastEditTime: 2020-07-11 12:05:57
 */
const log = require('electron-log')
const isHookLog = false// process.env.NODE_ENV !== 'production'
// function stackHook (message, transport) {
//   const stackError = new Error()
//   const lines = stackError.stack.split(/^\s+at/m)
//   const calledAt = lines[6].trim()
//   message.data.push(calledAt)
//   return message
// }
const initLog = () => {
  if (!isHookLog) {
    return
  }
  // log.hooks.push(stackHook)
  log.transports.file.maxSize = 1024 * 1024 * 3 // 3M
  log.transports.file.level = Config.getInstance().get('Log.file')
  log.transports.console.level = Config.getInstance().get('Log.console')
  // 接管console日志
  Object.assign(console, log.functions)
  console.info('log file', log.transports.file.getFile().path)
}

export {
  initLog
}
