var webpack = require('webpack');
var path = require('path');
module.exports = {
    context: path.join(__dirname),
    entry: "./src/js/root.js",
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude:/(node_modules)/,
            options: {
                presets: ['react', 'env'],
                plugins: [['import', {"libraryName": "antd", "style": "css"}]]
            }
        }, {
        test: /\.css$/,
        use: [
            {loader:"style-loader"},
            {loader: 'css-loader'}
          ]
      }]
    },
    output: {
        path: __dirname,
        filename: "./src/bundle.js"
    },
    devServer:{
        historyApiFallback:true,
        inline:true,
        compress:true,
        port:3000
    }
};
