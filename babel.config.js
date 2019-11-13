module.exports = {
  presets: ["@vue/app"],
  plugins: [
      // antd-按需加载配置
      [
          "import",
          { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
      ]
  ]
};
