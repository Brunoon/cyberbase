const webpack = require('webpack'); //需要转译后才能使用import，所以这里只能require

//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {//注意这里是exports不是export
    mode: 'development',
    devtool: 'source-map',
    entry: [
            'webpack-hot-middleware/client',
            __dirname + "/client/index.tsx" //入口文件
           ],
    output: {//输出目录
        path: __dirname + "/dist/",//打包后的js文件存放的地方
        filename: "bundle.js",//打包后的js文件名
        publicPath: '/dist/'
    },
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
    },
    // Add the loader for files.
    module: {
        rules: [
            {
                test: /\.tsx?$/, 
                loader: 'awesome-typescript-loader', 
                options: { configFileName: "tsconfig.client.json" }   //as no tsconfig.json, set one
            },
            { 
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=10000'
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    
    plugins: [
        // OccurenceOrderPlugin is needed for webpack 1.x only
        //new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
        // Use NoErrorsPlugin for webpack 1.x
        //new webpack.NoEmitOnErrorsPlugin()
    ]
    /*
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }*/
};