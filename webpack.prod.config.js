const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
        }
      ]
    }
};

// "var" | "assign" | "this" | "window" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "amd" | "umd" | "umd2" | "jsonp"