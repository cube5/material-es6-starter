console.log(__dirname)
module.exports = {
  devtool: 'sourcemap',
  context: __dirname + '/app',
  entry: ["webpack/hot/dev-server", "./app.js"],
  output: {
    // path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.html$/, loader: "html" },
      {test: /\.js$/, exclude: [/node_modules/], loaders: ['ng-annotate', 'babel']}
    ]
  },
  plugins: []
}