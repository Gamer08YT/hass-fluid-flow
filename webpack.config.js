const path = require("path");
const glob = require("enhanced-resolve");
const fs = require("fs");
const fileNames = fs.readdirSync('./src').reduce((acc, v) => ({...acc, [v]: `./src/${v}`}), {});
const webpack = require("webpack");


module.exports = {
    entry: fileNames,
    mode: "development",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                // https://datatables.net/forums/discussion/50003/datatables-with-webpack-fn-datatable-undefined
                // Disable AMD Parser.
                test: /\.([cm]?ts|tsx)$/, loader: "ts-loader", parser: {amd: false}
            },
            {parser: {amd: false}},
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
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
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
};