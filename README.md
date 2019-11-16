# README

基于vue-cli3的pages简单配置一下

积攒业务代码, 仅学习用, 不要真用到生产环境

# 使用

- nodejs: v12.13.0
- 目录结构参考: https://github.com/PanJiaChen/vue-element-admin

# 优化措施

- dynamic-import-node??

```js
module.exports = {
  presets: ["@vue/app"],
  plugins: [
      ["dynamic-import-node"]
  ]
};
```

# TODO

- 不同项目/页面 --> 处理各自静态资源路径/@alias別名
- 将vue-element-admin在src下的代码解耦

# FAQ

- 与template-cdn.html混用, 会导致打包内容有误 --> 默认视图不用cdn, 需要cdn时覆盖template-cdn.html
- Antd is not defined 解决办法
    - https://blog.csdn.net/qq_39990827/article/details/90700077

```
配置babel-plugin-import按需加载后 --> 全局导入就会失败 
还原babel.config.js的相关配置, 暂时全局导入

希望全局导入和按需加载可以分页面支持...
```    
    
- 多页面拆分失效 --> 打包页面空白??

```js
// @FIXME 多页面拆分出问题 ??
// config
//   .when(process.env.NODE_ENV !== 'development',
//     config => {
//       config
//         .optimization.splitChunks({
//         chunks: 'all',
//         cacheGroups: {
//           libs: {
//             name: 'chunk-libs',
//             test: /[\\/]node_modules[\\/]/,
//             priority: 10,
//             chunks: 'initial' // only package third parties that are initially dependent
//           },
//           elementUI: {
//             name: 'chunk-elementUI', // split elementUI into a single package
//             priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
//           },
//           commons: {
//             name: 'chunk-commons',
//             test: path.resolve(__dirname, 'src/components'),
//             minChunks: 3, //  minimum common number
//             priority: 5,
//             reuseExistingChunk: true
//           }
//         }
//       })
//       config.optimization.runtimeChunk('single')
//     }
//   )
```




