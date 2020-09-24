// 请求的方法 this.$api.[fileName].[funciton]()

const modules = require.context(
    ".", // api 相对目录
    false, // 是否查询子目录
    /\.js$/
)

const api = {}
modules.keys().forEach((key, index) => {
    if (key === "./index.js") return
    let fileName =  key.match(/.\/(\S*).js/)[1]
    Object.assign(api, { [fileName]: modules(key) })
})

modules.install = (Vue, options) => {
   Vue.prototype.$api = api
}

export default modules
