import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const requireApi = require.context(
    "./modules", // api 相对目录
    false, // 是否查询子目录
    /.js$/
)

let modules = {}
requireApi.keys().forEach(key => {
    // 以模块名为key
    let moduleKey = key.slice(2, -3)

    // 合并module
    Object.assign(modules, { [moduleKey]: requireApi(key).default })
})

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: modules
})