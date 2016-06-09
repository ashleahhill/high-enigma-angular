var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './vendor/angular.src.js',
            './node_modules/angular-ui-router/release/angular-ui-router.js',
            './src/app.js'
        ]
    },
    output: {
        filename: '[name].js',
        path: './dest',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, './src/'),
                loader: 'babel-loader'
            },
            { test: /\.md$/, loader: "html!markdown" },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap') },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin
                    .extract(
                        'style', 
                        'css?sourceMap!sass?sourceMap&indentedSyntax=true')
            }, 
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?sourceMap!resolve-url!sass?sourceMap')
            },
            { test: /\.(png|jpg)$/, loader: 'url?limit=32768' },
            { test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]' },
            { test: /\.haml$/, loader: 'hamlc-loader' }
        ],
        preLoaders: [
            { test: /\.js$/, loader: 'eslint', include: path.resolve('src') }
        ],
        noParse: [
            /angular\.src\.js/,
            /angular\-ui\-router\.js/
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.html'),
            inject: 'body'
        })
    ],
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        stats: {
            chunkModules: false,
            colors: true
        },
        contentBase: './src'
    },
    eslint: {
        configFile: 'src/.eslintrc'
    },
    sassLoader: {
        sourceMap: true,
        includePaths: [
            path.resolve(__dirname, './node_modules/compass-mixins/lib')
        ]
    }
};
