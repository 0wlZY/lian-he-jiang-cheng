const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  filenameHashing: true,
  lintOnSave: true,
  productionSourceMap: false,

  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("components", resolve("src/components"))
      .set("assets", resolve("src/assets"))
      .set("views", resolve("src/views"))
      .set("api", resolve("src/axios/api"))
      .set("libs", resolve("src/libs"));
  },
  devServer: {
    port: 8081,
    https: false,
    hotOnly: false,
    open: false,
    disableHostCheck: true
  }
};
