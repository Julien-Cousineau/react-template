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
          path.resolve(__dirname, '../'),
          path.join(__dirname, '../node_modules/wix-animations'),
          path.join(__dirname, '../node_modules/wix-style-react'),
          path.join(__dirname, '../node_modules/bootstrap-sass') // only if you use Grid component
        ],
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: true, localIdentName: '[name]__[local]___[hash:base64:5]', }
          },
          { loader: 'sass-loader' }
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
