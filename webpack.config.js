path = require("path");

module.exports = {
  entry: "./monster-creator.ts",
  output: {
    filename: "monster-creator.js",
    path: path.resolve(__dirname)
  },
  mode: "development",
  module: {
    rules: [{ test: /\.ts/, use: "ts-loader" }]
  }
};
