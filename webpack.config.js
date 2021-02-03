const { optimize } = require("webpack");
module.exports = {
  target: ["web", "es5"],
  mode: "development",
  resolve: {
    mainFields: ["browser", "module", "browserify", "main"],
  },
  plugins: [new optimize.ModuleConcatenationPlugin()],
};
