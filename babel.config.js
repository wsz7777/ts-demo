const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

const plugins = [
  [
    "import",
    { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" }
  ],
  [
    "@nutui/babel-plugin-separate-import",
    {
      style: "scss"
    }
  ]
];

if (IS_PROD) {
  plugins.push([
    "transform-remove-console",
    { exclude: ["error", "warn", "time", "timeEnd"] }
  ]);
}

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins
};
