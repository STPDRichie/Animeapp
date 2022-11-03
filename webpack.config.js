const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/styles/build.scss',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'file-loader',
                        options: { outputPath: '../src', name: 'index.css' },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    watchOptions: {
        aggregateTimeout: 600,
    },
};
