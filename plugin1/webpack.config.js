const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  mode: "development",
  target: "node",
  output: {
    path: path.resolve(__dirname, "../plugins/plugin1"),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "plugin1",
      library: { type: "commonjs" },
      filename: "remoteEntry.js",
      exposes: {
        "./plugin": "./src/index",
      },
      shared: require("./package.json").dependencies,
    }),
  ],
};
