/*
 * @Description:
 * @Author: CoolSnow
 * @Date: 2020-07-10 22:36:52
 * @LastEditTime: 2020-07-22 14:40:11
 */
/* @flow */
import { execSync } from 'child_process'
import getMAC from 'getmac'

// import { statSync } from 'fs'
// const win32RegBinPath = {
//   native: '%windir%\\System32',
//   mixed: '%windir%\\sysnative\\cmd.exe /c %windir%\\System32'
// }
// const guid = `${win32RegBinPath[isWindowsProcessMixedOrNativeArchitecture()]}\\reg ` +
// 'QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography ' +
// '/v MachineGuid'

// function isWindowsProcessMixedOrNativeArchitecture () {
//   // detect if the node binary is the same arch as the Windows OS.
//   // or if this is 32 bit node on 64 bit windows.
//   if (process.platform !== 'win32') {
//     return ''
//   }
//   // eslint-disable-next-line no-prototype-builtins
//   if (process.arch === 'ia32' && process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432')) {
//     return 'mixed'
//   }
//   return 'native'
// }

// function hash (guid) {
//   return createHash('sha256').update(guid).digest('hex')
// }

// function expose (result) {
//   return result
//     .toString()
//     .split('REG_SZ')[1]
//     .replace(/\r+|\n+|\s+/ig, '')
//     .toLowerCase()
// }

export function machineIdSync (original) {
  // const windir = require('electron').remote.process.env.windir
  // let is64 = false
  // try {
  //   is64 = statSync(`${windir}\\sysnative`)
  // } catch (e) {
  //   // leave as false
  // }
  // const cmd = `${windir}\\${is64 ? 'sysnative' : 'system32'}\\reg QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`
  // const guid = expose(execSync(cmd).toString())
  // return original ? guid : hash(guid)
  var guid = execSync('wmic DISKDRIVE get SerialNumber').toString().trim()
  if (!guid || guid.length < 18) {
    guid = getMAC()
  }
  guid = guid.toLowerCase()
  console.log('machineIdSync', guid)
  return guid
}
