const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置打包时引用相对路径，方便服务器打开组件
  publicPath: './'
})
