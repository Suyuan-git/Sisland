import store from "@store"

import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 合并modules router
const modules = require.context("./modules", false, /.js$/)
let routerList = []
modules.keys().forEach(key => {
    routerList = routerList.concat(modules(key).default)
})

const routes = [...routerList]

const router = new VueRouter({ routes })

router.beforeEach((to, form, next) => {
    // 每个页面的标题
    document.title = to.meta.title || ""
    //小屏幕点击关闭aside
    const clientWidth = document.documentElement.clientWidth
    if (clientWidth <= 500) store.commit("aside/asideVisible", false)
    next()
})

router.afterEach(() => {})

export default router
