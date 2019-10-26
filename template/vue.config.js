module.exports = {
  devServer: {
    // proxy: {
    // 例子
    // '/wine': {
    //   target: 'http://xxx.com/',
    //   changeOrigin: true
    // },
    // }

  },

  outputDir: "dist_pre",
  assetsDir: "static",
  productionSourceMap: false,
  publicPath: process.env.VUE_APP_BUILD_MODE === 'PROD' ? 'https://xxx.com/' : '/'

}