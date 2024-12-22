const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js'),
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        port: 8080
    },
    watch: true,
    watchOptions: {
        poll: 1000,
    },
};
