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

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")