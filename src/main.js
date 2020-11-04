import "@lib/index.less"
import "@css/index.less"
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "github-markdown-css"

import vueHljs from "vue-hljs";
import "@css/vue-hljs.less"
Vue.use(vueHljs)

import MCode from "@components/m-code/m-code"
Vue.component(MCode.name,MCode)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")