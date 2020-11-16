// 基础路由
export default [
    {
        path: "/",
        meta: {
            title: "Sisland"
        },
        component: () => import(/* webpackChunkName: "Home" */ "@views/Home")
    },
    {
        path: "*",
        redirect: "/"
    },
    {
        path: "/test",
        meta: {
            title: "测试页面"
        },
        component: () => import(/* webpackChunkName: "Home" */ "@src/Test")
    }
]
