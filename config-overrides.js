const {
  override,
  fixBabelImports,
  addPostcssPlugins,
} = require("customize-cra");

module.exports = override(
  // 按需加载
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  }),
  // rem适配
  addPostcssPlugins([require("postcss-px2rem")({ remUnit: 37.5 })])
);
