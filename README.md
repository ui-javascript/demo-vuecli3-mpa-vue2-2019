# README

基于vue-cli3的pages简单配置一下

# 使用

...

# TODO

...

# FIXME

- 与template-cdn.html混用, 会导致打包内容有误 --> 默认视图不用cdn, 需要cdn时覆盖template-cdn.html

- 多页面拆分失效 --> 打包页面空白

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
//             test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
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




