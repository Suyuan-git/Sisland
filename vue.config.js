const path = require("path")
const resolve = dir => path.join(__dirname, dir)

const isProduction = process.env.NODE_ENV === "production"

module.exports = {
    // 项目部署的基础路径,默认根目录
    // https://www.foobar.com/my-app/，那么将这个值改为 `/my-app/
    publicPath: "./",

    // build 输出文件目录
    outputDir: "dist",

    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,

    // 调整内部的 webpack 配置。
    chainWebpack: config => {
        if (process.env.NODE_ENV === "development") {
            //开发环境配置
        } else {
            // 生产环境配置
        }
        // 配置路径别名,注意在样式及 html 模板中引用路径的简写时，前面需要加上 ～ 符，否则路径解析会失败
        config.resolve.alias
            .set("@src", resolve("src"))
            .set("@components", resolve("src/components"))
            .set("@css", resolve("src/css"))
            .set("@lib", resolve("src/lib"))
            .set("@mixins", resolve("src/mixins"))
            .set("@router", resolve("src/router"))
            .set("@store", resolve("src/store"))
            .set("@views", resolve("src/views"))
            .set("@assets", resolve("src/assets"))
            .set("@utils", resolve("src/utils"))

        //解决首次进入页面所有资源预加载  https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
        config.plugins.delete("prefetch")
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === "production") {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
            config.devtool = "source-map" //配合vscode进行调试
        }
    },
    // webpack-dev-server 相关配置
    devServer: {
        open: false,
        https: false,
        hotOnly: false,
        disableHostCheck: true
    },

    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,

    // css相关配置
    css: {
        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
        extract: isProduction,
        // 在浏览器审查时是否显示当前css文件路径 开发环境建议开启 不影响热更新
        sourceMap: true,

        // 为预处理器的 loader 传递自定义选项。比如传递给
        // sass-loader 时，使用 `{ sass: { ... } }`。
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true
                }
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        requireModuleExtension: true
    },
    // 第三方插件配置
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "src/css/mixin.less"), path.resolve(__dirname, "src/css/common.less")] //引入全局less变量
        }
    }
}
