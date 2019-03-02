const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRootPlugin = require('html-webpack-root-plugin');
const StylableWebpackPlugin = require('@stylable/webpack-plugin');

module.exports = {
  module: {
    rules: [
      { test: /\.js$/,exclude: /node_modules/,enforce: 'pre',use: [{loader:'eslint-loader',options:{fix:true}}]},
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },

      { test: /(?<!\.st)\.css$/, loaders: ['style-loader', 'css-loader'] },
      //   { test: /\.less$/,use: ['style-loader', {loader:'css-loader',options: {modules: false}}, {loader:'less-loader',options: {javascriptEnabled:true,modules: true}}],},
      
      // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
      // { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      // { test: /\.(png|jpg|gif|slf)$/,use: [{loader: 'file-loader',options: {}}]},
      // { test: /\.(glsl|frag|vert)$/, loader: 'raw', exclude: /node_modules/ },
      // {test: /\.glsl$/,loader: 'webpack-glsl-loader'}
      {
        test: /\.scss$/,
        include: [
          path.join(__dirname, 'node_modules/wix-animations'),
          path.join(__dirname, 'node_modules/wix-style-react'),
          path.join(__dirname, 'node_modules/bootstrap-sass') // only if you use Grid component
        ],
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&camelCase&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader'
        ]
      },
      
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'file-loader' },

    ]
  },
  node: {
    fs: "empty"//Issue with async calls
  },
  devServer: {
    historyApiFallback: true,//React_Router
  },
  plugins: [
    new StylableWebpackPlugin({
      experimentalHMR: true,
      useEntryModuleInjection: true
    }),
    new HtmlWebpackPlugin({
      title: 'Testing React',
    }),
    new ReactRootPlugin()
  ],
};
