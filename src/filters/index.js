// 在js调用方法 this.$options.filters[方法名]()
const modules = require.context(
    "./modules", // api 相对目录
    false, // 是否查询子目录
    /\.js$/
)

// 注册组件
modules.install = (Vue,options)=>{
    modules.keys().forEach(key => {
        const obj = modules(key)
        for (const i in obj) {
           Vue.filter(i, obj[i])
        }
    });
}

export default modules
