const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/components/pages/Memorando_6398728.html'), to: 'static/media' },
            ],
        }),
    ]
};