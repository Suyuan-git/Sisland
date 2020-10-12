import "@lib/index.less"
import "@css/index.less"
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "github-markdown-css"

import vueHljs from "vue-hljs";
import "vue-hljs/dist/vue-hljs.min.css";
Vue.use(vueHljs)

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