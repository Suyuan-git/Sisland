export default [
    {
        path: "/docs",
        redirect: "/docs/introduce",
        component: () => import("@views/Doc"),
        children: [
            {
                path: "introduce",
                meta: {
                    title: "Sisland 介绍"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/introduce")
            },
            {
                path: "install",
                meta: {
                    title: "Sisland 安装"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/install")
            },
            {
                path: "get-start",
                meta: {
                    title: "Sisland 快速上手"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/getStart")
            }
        ]
    }
]
