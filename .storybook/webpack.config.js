const path = require('path');
const StylableWebpackPlugin = require('@stylable/webpack-plugin');

module.exports = {
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /(?<!\.st)\.css$/, loaders: ['style-loader', 'css-loader'] },
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

  plugins: [
    new StylableWebpackPlugin({
      experimentalHMR: true,
      useEntryModuleInjection: true
    }),
  ],
};
