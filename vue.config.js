const path = require("path");
module.exports = {
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host: "localhost",
    port: "8081",
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://114.116.91.158:7005", //API服务器的地址
        ws: true, //代理websockets
        changeOrigin: true // 虚拟的站点需要更管origin
      }
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/assets/css/base.less")]
    }
  }
};
