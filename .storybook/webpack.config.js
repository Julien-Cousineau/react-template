module.exports = {
  module: {
    rules: [
      { test: /\.js$/,exclude: /node_modules/,loader:"babel-loader"},
      
      { test: /\.css$/,use: ['style-loader', 'css-loader'],},
      { test: /\.less$/,use: ['style-loader', {loader:'css-loader',options: {modules: false}}, {loader:'less-loader',options: {javascriptEnabled:true,modules: true}}],},
      { test: /\.scss$/, use: ['style-loader', 'css-loader', "sass-loader"]},
      // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
      // { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      // { test: /\.(png|jpg|gif|slf)$/,use: [{loader: 'file-loader',options: {}}]},
      // { test: /\.(glsl|frag|vert)$/, loader: 'raw', exclude: /node_modules/ },
      // {test: /\.glsl$/,loader: 'webpack-glsl-loader'}
          
    ]
  },
  node: {
    fs: "empty"
  },
  plugins: [
    
  ],
};