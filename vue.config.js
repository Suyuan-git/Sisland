const path = require("path")
const resolve = dir => path.join(__dirname, dir)

const { Proxy } = require("./src/http/config.js")

const isProduction = process.env.NODE_ENV === "production"

module.exports = {
    // 项目部署的基础路径,默认根目录
    // https://www.foobar.com/my-app/，那么将这个值改为 `/my-app/
    publicPath: "/",

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
        // 配置路径别名
        config.resolve.alias
            .set("@src", resolve("src"))
            .set("@components", resolve("src/components"))
            .set("@base", resolve("src/components/base"))
            .set("@css", resolve("src/css"))
            .set("@directives", resolve("src/directives"))
            .set("@filters", resolve("src/filters"))
            .set("@http", resolve("src/http"))
            .set("@js", resolve("src/js"))
            .set("@lib", resolve("src/lib"))
            .set("@mixins", resolve("src/mixins"))
            .set("@router", resolve("src/router"))
            .set("@store", resolve("src/store"))
            .set("@views", resolve("src/views"))
            .set("@static", resolve("static"))
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
        host: "0.0.0.0",
        port: 3000,
        https: false,
        hotOnly: false,
        disableHostCheck: true,
        // 设置代理
        proxy: Proxy,
        before: app => {}
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
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        requireModuleExtension: true
    },

    // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
    // 在多核机器下会默认开启。
    parallel: require("os").cpus().length > 1,

    // PWA 插件相关配置
    pwa: {},

    // 第三方插件配置
    pluginOptions: {}
}
