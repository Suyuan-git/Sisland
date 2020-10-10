<template>
    <div class="layout flex-col">
        <m-topnav menuShow class="nav"></m-topnav>
        <div class="content flex">
            <aside v-if="asideVisible">
                <h2>组件列表</h2>
                <ol>
                    <li v-for="item in asideList" :key="item.title">
                        <router-link :to="item.link">{{ item.title }}</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
import MTopnav from "@components/m-topnav/m-topnav"
export default {
    components: {
        MTopnav
    },
    computed: {
        ...mapState({
            asideVisible: state => state.aside.asideVisible
        })
    },
    data() {
        return {
            asideList: [
                {
                    title: "Switch 开关",
                    link: "/doc/switch"
                },
                {
                    title: "Button 按钮",
                    link: "/doc/button"
                },
                {
                    title: "Modal 组件",
                    link: "/doc/modal"
                },
                {
                    title: "Tabs 组件",
                    link: "/doc/tabs"
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .nav {
        flex-shrink: 0;
    }
    > .content {
        flex-grow: 1;
        padding-top: 54px;
        padding-left: 156px;
        @media (max-width: 500px) {
            padding-left: 0;
        }
    }
}
.content {
    display: flex;
    > aside {
        flex-shrink: 0;
    }
    > main {
        flex-grow: 1;
        padding: 16px;
    }
}
aside {
    background: lightblue;
    width: 150px;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    z-index: 8;
    > h2 {
        margin-bottom: 4px;
    }
    > ol {
        > li {
            padding: 4px 0;
        }
    }
}
main {
    overflow: auto;
}
</style>
