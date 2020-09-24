// proxy 代理配置
const env = process.env.NODE_ENV

const config = {
    proxy: {
        name: "/", //代理前缀
        status: true //是否开启代理
    },
    development: "https://mock.yonyoucloud.com/mock/8370", //测试环境
    production: "https://mock.yonyoucloud.com/mock/8370" //生产环境
}

// 代理Proxy
const Proxy = {
    [config.proxy.name]: {
        target: config[env],
        secure: false, //https 开启 true
        changeOrigin: true,
        pathRewrite: {
            ["^" + config.proxy.name]: ""
        }
    }
}

module.exports = {
    URL: env === "development" && config.proxy.status ? config.proxy.name : config[env],
    Proxy: config.proxy.status ? Proxy : ""
}