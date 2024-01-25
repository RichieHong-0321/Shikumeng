const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "development"? '/':'/shikumeng',
  transpileDependencies: true,
  devServer: {
    hot: true,//自动保存
  },
})


