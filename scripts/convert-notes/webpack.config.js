module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js"
  },
  target: "node",
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["env", "react", "stage-2"]
        }
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["env", "react", "stage-2"]
        }
      }
    ]
  }
};
