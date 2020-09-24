const modules =  require.context(
    "./modules",
    false,
    /\.js$/
)

modules.install = (Vue,options) =>{
    // 注册指令
    modules.keys().forEach(key => {
        let fileName = key.match(/.\/(\S*).js/)[1]
        Vue.directive(fileName,modules(key).default)
    });
}
export default modules