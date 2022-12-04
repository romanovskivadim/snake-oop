const path = require('path');

module.exports = {
  mode: "production",
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'umd',
    clean: true
  },
module: {
  rules: [
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-typescript'],
          plugins: ['@babel/proposal-class-properties']
        }
      }
    },
    {
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ]
},
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  }
};