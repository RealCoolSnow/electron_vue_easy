/*
 * @Descripttion:
 * @version:
 * @Author: CoolSnow
 * @Date: 2020-04-23 10:11:12
 * @LastEditTime: 2020-09-17 15:36:42
 */
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  chainWebpack: config => {
    config.resolve.symlinks(true)
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  pluginOptions: {
    electronBuilder: {
      productName: 'electron_vue_easy',
      appId: 'app.electron_vue_easy',
      directories: {
        output: 'build'
      },
      externals: [/* 'serialport', 'ffi-napi', 'ref-napi', 'electron-edge-js' */],
      builderOptions: {
        win: {
          icon: './public/app.ico',
          extraResources: ['./libs/**']//,
          // requestedExecutionLevel: 'highestAvailable'
        },
        nsis: {
          perMachine: true,
          allowToChangeInstallationDirectory: false,
          allowElevation: true,
          oneClick: false
        }
      }
    }
  }
}
