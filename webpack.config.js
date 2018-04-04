//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {//注意这里是exports不是export
    mode: 'development',
    devtool: 'source-map',
    entry: __dirname + "/client/index.tsx",//唯一入口文件，就像Java中的main方法
    output: {//输出目录
        path: __dirname + "/dist/",//打包后的js文件存放的地方
        filename: "bundle.js",//打包后的js文件名
        publicPath: '/dist/'
    },
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    // Add the loader for .ts files.
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader', 
              options: { configFileName: "tsconfig.client.json" }   //as no tsconfig.json, set one
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
    /*
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }*/
};