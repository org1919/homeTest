const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');//打包带着html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//每次打包自动清理dist
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    // entry: path.resolve(__dirname,'src/index.js'),//入口
    entry: './src/index.js',//入口

    output: {
        path: path.resolve(__dirname, 'dist'),//打包完成后的文件放在哪，dist文件夹会自动创建好
        filename: 'main.js'
    },

    //配置各种loader
    module: {
        rules: [
            //解析ES6
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    //本身并不能解析es6语法，它依赖的是babel/preset-env去解析的
                    //babel/preset-env包含了一系列的ES6语法解析的插件,每个插件对应一个ES6语法
                    //babel-loader它就是依靠这些插件去解析的
                    options: {
                        presets: ['@babel/preset-env'],
                        "plugins": [
                            [
                                "component",
                                {
                                    "libraryName": "element-ui",
                                    "styleLibraryName": "theme-chalk"
                                }
                            ]
                        ]
                    },

                }
            },
            //打包CSS vue-style-loader是style-loader的一个增强版本
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']//使用loader的时候有顺序，从后往前
            },
            //打包图片，内部会使用到file-loader
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',//内部会使用到file-loader
                        options: {
                            limit: 8192 * 100,
                            //如果图片小于这个值，会被base64编码为一个字符串，提高效率，减少请求
                            name: '[hash:8].[ext]' //打包后的图片名字，截取哈希值的前八位就ok
                        }
                    }
                ]
            },
            //配置loader处理vue文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }
        ]
    },

    //配置插件完成其它搞不定的功能
    plugins: [
        new HtmlWebpackPlugin({
            //得去找我要配置的html文件
            template: './src/public/index.html'
        }),
        new CleanWebpackPlugin(),//自动清理dist文件夹插件,
        new VueLoaderPlugin(),//vue相关插件
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'src/public'),
                to: path.resolve(__dirname, 'dist'),
                ignore: ['index.html']
            }
        ]),
    ],

    mode: 'development',//配置启动模式，开发模式还是生产模式

    devServer: {
        port: 8000,//服务启动的端口
        open: true,//是否自动打开浏览器
        quiet: true,//输出少量的提示信息
        // proxy: {
        //     '/api': {//这个/api其实是告诉代理,以后什么样的请求，需要给我代理转发
        //         target: 'https://localhost:4000',
        //         //转发的目标地址不需要路径,因为转发的时候会把发送请求的路径默认频道目标后面
        //         pathRewrite: { '^/api': '' },
        //         //真正的目标地址应该是http://localhost:4000/users/info
        //         //这一行在干的活就是把/api去掉
        //         changeOrigin: true
        //     }
        // }
        proxy: {
            "/api": {
                target: "http://localhost:4000",
                pathRewrite: { "^/api": "" },
                changeOrigin: true
            }
        }
    },

    devtool: 'cheap-module-eval-source-map',//定位出错所在的原始代码行

    // resolve: {
    //     extensions: [".js", ".json", ".vue"], //解决导入省略后缀名称
    //     alias: {
    //         'vue$': 'vue/dist/vue.esm.js',
    //         '@': path.resolve(__dirname, 'src')
    //     }
    // }

    resolve: {
        extensions: [".js", ".json", '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            "@": path.resolve(__dirname, 'src')
        }
    }
}