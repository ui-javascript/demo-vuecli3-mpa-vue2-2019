const path = require("path")

// 构建工具类
const utils = require("./build/utils")

// 配置
const CONFIG = require("./config")

// 几个辅助函数
function resolve(dir) {
  return path.join(__dirname, dir)
}

const isEnvProd = (process.env.NODE_ENV === 'production')
const isEnvDev = (process.env.NODE_ENV === 'development')

const currentOutsidePath = CONFIG.entry.split('/')[1];
console.log('---当前工程最外层路径---')
console.log(currentOutsidePath)

// 获取多页面信息
let pages = utils.getEntry(CONFIG.entry)

// 给html添加参数, 用于生成多页面路径的导航
// @fix 2019-11-16 pages是对象类型 不是数组 改为Object.keys().length
const entries = pages.entries
if (!isEnvProd && Object.keys(entries).length > 1 && CONFIG.showNav) {
  for (let index in entries) {
    Object.assign(entries[index], {
      _browserPage: entries.browserPages,
    })
  }
}



module.exports = {

  // 基本配置
  // 1) / 绝对路径
  // 2) ./ 相对路径
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: isEnvDev,
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    port: CONFIG.port,
    // open: true,
    overlay: {
      warnings: false,
      errors: true
    },

    // vue-element-admin的mock环境 =============
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://127.0.0.1:${CONFIG.port}/mock`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    after: require('./mock/mock-server.js')

  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme

          // 'primary-color': '#F5222D',
          // 'link-color': '#F5222D',
          // 'border-radius-base': '4px'
        },
        // do not remove this line
        javascriptEnabled: true
      }
    }
  },
  // veui-配置 ================
  transpileDependencies: [
    /[/\\]node_modules[/\\]veui[/\\]/,
    /[/\\]node_modules[/\\]vue-awesome[/\\]/,
    /[/\\]node_modules[/\\]resize-detector[/\\]/
  ],
  // 全局样式
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss')
      ]
    }
  },
  // vue-cli 多页面
  pages: entries,
  configureWebpack: {
    // plugins: [],
    resolve: {
      alias: {
        '@': resolve('src'),
        // @TODO 目前这个变量仅仅给vue-element-admin使用
        // --> 所以src内使用到^/store的地方代码都有耦合
        // 当前项目最外层路径
        '^': resolve(currentOutsidePath || 'src'),
        // @fix runtime -> compiler模式
        // https://blog.csdn.net/wxl1555/article/details/83187647
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  chainWebpack: config => {

    // TODO: need test
    config.plugins.delete('preload')
    // TODO: need test
    config.plugins.delete('prefetch')

    // set svg-sprite-loader
    config.module
        .rule('svg')
        .exclude.add(resolve('src/icons'))
        .end()
    config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()

    config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
            options.compilerOptions.preserveWhitespace = true
            return options;
        });

    // veui配置 ==============
    // VEUI 样式主题与组件代码分离, 配置如下
    config.module
        .rule('veui')
        .test(/\.vue$/)
        .pre()
        .use('veui-loader')
        .loader('veui-loader')
        .tap(() => {
          return {
            modules: [
              {
                package: 'veui-theme-one',
                fileName: '{module}.less'
              },
              {
                package: 'veui-theme-one',
                fileName: '{module}.js',
                transform: false
              }
            ]
          }
        })


    // 开发环境 cheap-source-map
    config
      .when(isEnvDev,
        config => config.devtool('cheap-source-map')
      )

    // vue-element-admin 的打包优化 ======
    // @FIXME 多页面拆分出问题 ??
    // config
    //     .when(isEnvDev,
    //         config => {
    //           config
    //               .plugin('ScriptExtHtmlWebpackPlugin')
    //               .after('html')
    //               .use('script-ext-html-webpack-plugin', [{
    //                 // `runtime` must same as runtimeChunk name. default is `runtime`
    //                 inline: /runtime\..*\.js$/
    //               }])
    //               .end()
    //           config
    //               .optimization.splitChunks({
    //             chunks: 'all',
    //             cacheGroups: {
    //               libs: {
    //                 name: 'chunk-libs',
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: 10,
    //                 chunks: 'initial' // only package third parties that are initially dependent
    //               },
    //               elementUI: {
    //                 name: 'chunk-elementUI', // split elementUI into a single package
    //                 priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
    //                 test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
    //               },
    //               commons: {
    //                 name: 'chunk-commons',
    //                 test: resolve('src/components'), // can customize your rules
    //                 minChunks: 3, //  minimum common number
    //                 priority: 5,
    //                 reuseExistingChunk: true
    //               }
    //             }
    //           })
    //           config.optimization.runtimeChunk('single')
    //         }
    //     )

    // @TODO 向html塞参数, 暂时失败了 --> 计划塞cdn
    // if (!isEnvProd) {
    //   config
    //     .plugin('html')
    //     .tap(args => {
    //       // console.log(args)
    //       // args[0].cdn = entries
    //       return args
    //     })
    // }

  },

}
