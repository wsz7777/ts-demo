const path = require("path");
const moment = require("moment");
// const webpack = require('webpack');
process.env.VUE_APP_VERSION = require("./package.json").version;
process.env.VUE_APP_VER_TIME = moment().format("YYYY-MM-DD");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// const proxyOptions = {
//   target: "http://127.0.0.1:7777"
//   // pathRewrite: { "^/socket.io": "" }
// };

// vue.config.js
const vueConfig = {
  outputDir: process.env.VUE_APP_PATH,
  publicPath: `/${process.env.VUE_APP_PATH}`,

  chainWebpack: config => {
    config.resolve.alias.set("@$", resolve("src"));

    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("vue-svg-icon-loader")
      .loader("vue-svg-icon-loader")
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]"
      });

    // config.module
    //   .rule("imports-loader")
    //   .test(/\.(vue|(j|t)sx?)$/)
    //   .use("imports-loader")
    //   .loader("imports-loader?window.Quill=quill")
    //   .end()
    //   .include.add(path.resolve("./node_modules/quill-image-resize-module"));
  },

  configureWebpack: {
    // module: {
    //   rules: [
    //     {
    //       test: /\.(vue|(j|t)sx?)$/,
    //       loader: "imports-loader?window.Quill=quill",
    //       include: path.resolve("./node_modules/quill-image-resize-module")
    //     }
    //   ]
    // }
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     'window.Quill': 'quill/dist/quill.js',
    //     'Quill': 'quill/dist/quill.js'
    //   }),
    // ]
  },

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },

  devServer: {
    // // development server port 8000
    // port: 8888,
    // proxy: {
    //   "^/socket.io": proxyOptions
    // }
  },

  // disable source map in production
  productionSourceMap: false,
  lintOnSave: undefined,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
};

module.exports = vueConfig;
