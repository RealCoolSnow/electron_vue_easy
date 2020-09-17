import {
  formatTime
} from './util'
/*
 * @Descripttion: 配置文件
 * @version:
 * @Author: CoolSnow
 * @Date: 2020-04-30 12:57:26
 * @LastEditTime: 2020-09-17 15:34:57
 *
 * 存储路径:
 * app.getPath('userData')\AppData\Roaming\exchange-app\config.json
 * 字段：
 *
 */
class Config {
  static getInstance () {
    if (!Config._instance) {
      Config._instance = new Config()
    }
    return Config._instance
  }

  constructor () {
    const schema = {
      debug: {
        type: 'boolean'
      },
      cwd: {
        type: 'string'
      },
      Log: {
        file: {
          type: 'boolean'
        },
        console: {
          type: 'boolean'
        }
      }
    }
    const _Store = require('electron-store')
    this.store = new _Store({
      schema
    })
    this.store.set('launch_time', formatTime(new Date()))
    console.log('config path: ', this.store.path)
    this._init()
    console.log('config data: ', this.store.store)
  }

  /**
   * 初始化默认值
   */
  _init () {
    this._setDefaultValue('debug', false)
    this._setDefaultValue2('cwd', process.cwd(), true)
    this._setDefaultValue('Log.file', true)
    this._setDefaultValue('Log.console', true)
  }

  _setDefaultValue (key, value) {
    if (!this.has(key)) {
      this.set(key, value)
    }
  }

  _setDefaultValue2 (key, value, resetFlag) {
    if (resetFlag || !this.has(key)) {
      this.set(key, value)
    }
  }

  initDevice (model) {
    const resetFlag = model !== this.get('Device.model', '')
    this.set('Device.model', model)
    // const horizontal = this.isHorizontal()
    this._setDefaultValue2('Led.port', 'COM2', resetFlag)
    this._setDefaultValue2('BillAcceptor.port', 'COM4', resetFlag)
    this._setDefaultValue2('BillDispensor.port', 'COM1', resetFlag)
    // this._setDefaultValue('BillDispensor.baudRate', 9600)
    // this._setDefaultValue('BillDispensor.parity', 'even')
    this._setDefaultValue2('BillShutter.port', 'COM3', resetFlag)
    this._setDefaultValue2('CoinAcceptor.port', 'COM5', resetFlag)
    this._setDefaultValue2('CoinAcceptor.eventId', -1, resetFlag)
    this._setDefaultValue2('CoinDispensor.port', 'COM5', resetFlag)
    this._setDefaultValue2('BillDispensor2.port', 'COM6', resetFlag)
    this._setDefaultValue2('BillDispensor3.port', 'COM7', resetFlag)
    this._setDefaultValue2('BillShutter2.port', 'COM8', resetFlag)
    this._setDefaultValue2('BillShutter3.port', 'COM9', resetFlag)
    // this._setDefaultValue('QrScanner.port', 1)
    // this._setDefaultValue('QrScanner.baudRate', 115200)
  }
  // _setDefaultValueNotNull (key, value) {
  //   if (!this.has(key) || this.get(key, '') === '') {
  //     this.set(key, value)
  //   }
  // }

  isDebug () {
    return this.get('debug', false)
  }

  set (key, value) {
    this.store.set(key, value)
  }

  get (key, defaultValue) {
    return this.store.get(key, defaultValue)
  }

  has (key) {
    return this.store.has(key)
  }

  delete (key) {
    this.store.delete(key)
  }

  clear () {
    this.store.clear()
  }
}
export {
  Config
}
