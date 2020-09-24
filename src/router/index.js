import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import store from "@store"

const routes = [
    {
        path: "/",
        meta: {
            title: "VU-UI"
        },
        component: () => import(/* webpackChunkName: "Home" */ "@views/Home")
    },
    {
        path: "/doc",
        meta: {
            title: "文档介绍"
        },
        component: () => import("@views/Doc"),
        children: [
            {
                path: "",
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/doc")
            },
            {
                path: "switch",
                meta: {
                    title: "switch"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/switch")
            },
            {
                path: "button",
                meta: {
                    title: "button"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/button")
            },
            {
                path: "dialog",
                meta: {
                    title: "dialog"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/dialog")
            },
            {
                path: "tabs",
                meta: {
                    title: "tabs"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/tabs")
            }
        ]
    }
]

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
