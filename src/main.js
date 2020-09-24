import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// 导入样式
import "@css/index.less"

//导入Api
import Api from "@/http/api/index.js"
Vue.use(Api)

//导入工具函数
import Tool from "@js/index.js"
Vue.use(Tool)

// 全局过滤器
import filters from "@filters/index.js"
Vue.use(filters)

// 全局指令
import directives from "@directives/index.js"
Vue.use(directives)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")
