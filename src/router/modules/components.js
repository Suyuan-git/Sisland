export default [
    {
        path: "/components",
        redirect: "/docs",
        component: () => import("@views/Doc"),
        children: [
            {
                path: "switch",
                meta: {
                    title: "Switch 开关"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/switch")
            },
            {
                path: "button",
                meta: {
                    title: "Button 按钮"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/button")
            },
            {
                path: "input",
                meta: {
                    title: "Input 输入框"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/input")
            },
            {
                path: "modal",
                meta: {
                    title: "Modal 对话框"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/modal")
            },
            {
                path: "tabs",
                meta: {
                    title: "Tabs 标签页"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/tabs")
            },
            {
                path: "form",
                meta: {
                    title: "Form 表单"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/form")
            },
            {
                path: "anchor",
                meta: {
                    title: "Anchor 锚点"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/anchor")
            }
        ]
    }
]
