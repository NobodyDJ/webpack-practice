const path = require("path");// node.js核心模块，专门用来处理路径问题

module.exports = {
    // 入口
    entry: "./src/main.js",// 相对路径
    // 输出
    output: {
        //文件输出路径
        // __dirname node.js变量，代表当前文件的文件夹目录
        path: path.resolve(__dirname, "dist"),//绝对路径
        //文件名
        filename: "static/js/main.js",
    },
    // 加载器
    module: {
        rules: [
          // loader配置
            {
                test: /\.css$/i,
                //执行顺序从右到左（从下到上）
                use: [
                    "style-loader",// 将js中css通过创建style标签加html文件生效
                    "css-loader", // 将css资源编译成common.js的模块到js中
                ],
            },
            {
                test: /\.less$/i,
                use: [
                // compiles Less to CSS
                'style-loader',
                'css-loader',
                'less-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                // 将 JS 字符串生成为 style 节点
                'style-loader',
                // 将 CSS 转化成 CommonJS 模块
                'css-loader',
                // 将 Sass 编译成 CSS
                'sass-loader',
                ],
            },
            {
                test: /\.styl$/,
                use: [
                // 将 JS 字符串生成为 style 节点
                'style-loader',
                // 将 CSS 转化成 CommonJS 模块
                'css-loader',
                // 将 Sass 编译成 CSS
                'stylus-loader',
                ]
            },
            {
                parser: {
                    test: /\.(png|jpg?g|gif|webp|svg)$/i,
                    type: 'asset',
                    dataUrlCondition: {
                      maxSize: 4 * 1024,
                    },
                  },
            }
        ]  
    },
    // 插件
    plugins: [
        // plugin的配置
    ],
    // 模式
    mode: "development",
}