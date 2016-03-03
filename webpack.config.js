module.exports = {
  entry: ["./entry.js", "bootstrap-loader"],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          plugins: ["syntax-object-rest-spread", "transform-object-rest-spread"]
        }
      },
      {
        test: /\.css$/, loader: "style!css"
      },
      {
        test: /\.(woff2?|svg)$/, loader: 'url?limit=10000'
      },
      {
        test: /\.(ttf|eot)$/, loader: 'file'
      },
      {
        test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery'
      }
    ]
  }
};
