const path = require("path");
const glob = require("enhanced-resolve");
const fs = require("fs");
const fileNames = fs.readdirSync('./src').reduce((acc, v) => ({...acc, [v]: `./src/${v}`}), {});
const webpack = require("webpack");


module.exports = {
    entry: fileNames,
    mode: "production",
    optimization: {
        minimize: false
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {parser: {amd: false}},
            {
                test: /\.css$/,
                use: ['raw-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        extensionAlias: {
            ".js": [".js", ".ts"],
            ".cjs": [".cjs", ".cts"],
            ".mjs": [".mjs", ".mts"]
        },
        alias: {
            'jquery-ui': 'jqueryui/jquery-ui.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery',
            'window.$': 'jquery'
        })
    ],
    output: {
        library: "FluidFlowCard",
        libraryTarget: "umd",
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    externals: {
        './hacs.js': 'hacs', // Der Pfad zur separaten Datei und der Name, unter dem sie als externer Code referenziert wird
    },
};