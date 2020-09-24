// 请求的方法 this.$Tool.[fileName].[funciton]

const modules = require.context(
    "./modules", // api 相对目录
    false, // 是否查询子目录
    /.js$/
)

let Tool = {}
modules.keys().forEach((key, index) => {
    if (key === "./index.js") return
	let fileName = key.match(/.\/(\S*).js/)[1]
    Object.assign(Tool, { [fileName]: modules(key) })
})

modules.install = (Vue,options)=>{
    Vue.prototype.$Tool = Tool
}

export default modules;