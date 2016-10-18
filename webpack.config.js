var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    entry: './src/js/client.js',
    output: {
        path: './build/js',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3000
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
            }
        }]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};


// module.exports = {
//     entry: './src/js/client.js',
//     output: {
//         path: 'build/js',
//         filename: 'bundle.js'
//     },
//     devServer: {
//         inline: true,
//         contentBase: './',
//         port: 3000
//     },
//     module: {
//         loaders: [{
//             test: /\.jsx?$/,
//             exclude: /(node_modules|bower_components)/,
//             loader: 'babel-loader',
//             query: {
//                 presets: ['react', 'es2015', 'stage-0'],
//                 plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
//             }
//         }]
//     },
// };
