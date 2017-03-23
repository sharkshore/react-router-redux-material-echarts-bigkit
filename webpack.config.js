var config = {
    entry: './index.js',
    output: {
        path: './',
        filename: 'bundle.js',
    },
    devServer: {
        port: 7777,
        //添加反向代理的调试
        proxy: {
            '/json': {
                target: 'http://127.0.0.1:3000/',
                changeOrigin: true
            }
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react','stage-0']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader?modules"
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
}
module.exports = config;


