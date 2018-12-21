const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: "ts-loader"
      }
    ]
  });
  config.plugins.push(new TSDocgenPlugin());
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};