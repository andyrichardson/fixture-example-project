module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: `${__dirname}/src`,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".mjs", ".js"]
  }
};
