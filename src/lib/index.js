const requireLib = require.context(
    "./", // api 相对目录
    true, // 是否查询子目录
    /.vue$/
)

const install = function(Vue) {
    requireLib.keys().forEach(key => {
        const component = requireLib(key).default
        Vue.component(component.name, component)
    })

    // 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
    if (typeof window !== "undefined" && window.Vue) {
        install(window.Vue)
    }
}

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default {
    install
}