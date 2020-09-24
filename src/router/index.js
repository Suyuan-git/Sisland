import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        meta: {
            title: "页面标题"
        },
        component: () => import(/* webpackChunkName: "layout" */ "@views/Home")
    }
    // {
    //   path: '/user',
    //   name: 'user',
    //   component: () => import(/* webpackChunkName: "layout" */ '../views/UserLayout'),
    //   children:[
    //     {
    //       path:"/user",
    //       redirect:"/user/login"
    //     },
    //     {
    //       path: "/user/login",
    //       name: "login",
    //       component: () => import(/* webpackChunkName: "user" */ '../views/User/Login')
    //     },
    //     {
    //       path: "/user/register",
    //       name: "register",
    //       component: () => import(/* webpackChunkName: "user" */ '../views/User/Register')
    //     }
    //   ]
    // }
]

const router = new VueRouter({ routes })

router.beforeEach((to, form, next) => {
    // 每个页面的标题
    document.title = to.meta.title || ""
    
    next()
})

router.afterEach(() => {})

export default router
