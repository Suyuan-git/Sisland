<template>
    <div class="layout flex-col">
        <m-topnav menuShow class="nav"></m-topnav>
        <div class="content flex">
            <aside v-if="asideVisible" ref="aside">
                <ol>
                    <li v-for="item in asideList" :key="item.title">
                        <router-link v-if="item.link" :to="item.link">{{ item.title }}</router-link>
                        <template v-if="item.childer">
                            <p class="components">{{ item.title }}</p>
                            <router-link v-for="child in item.childer" :key="child.link" :to="child.link" class="components-item"
                                >{{ child.title.split(" ")[0] }} <span class="chinese">{{ child.title.split(" ")[1] }}</span>
                            </router-link>
                        </template>
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
    mounted() {
        document.addEventListener("mouseup", this.handleMouseup)
    },
    beforeDestroy() {
        document.removeEventListener("mouseup", this.handleMouseup, false)
    },
    methods: {
        handleMouseup(e) {
            let aside = this.$refs.aside
            if (aside && document.documentElement.clientWidth <= 500) {
                if (!aside.contains(e.target)) {
                    this.$store.commit("aside/asideVisible", false)
                }
            }
        }
    },
    data() {
        return {
            asideList: [
                {
                    title: "介绍",
                    link: "/doc/introduce"
                },
                {
                    title: "安装",
                    link: "/doc/install"
                },
                {
                    title: "快速上手",
                    link: "/doc/get-start"
                },

                {
                    title: "Components",
                    childer: [
                        {
                            title: "Button 按钮",
                            link: "/doc/button"
                        },
                        {
                            title: "Switch 开关",
                            link: "/doc/switch"
                        },
                        {
                            title: "Modal 对话框",
                            link: "/doc/modal"
                        },
                        {
                            title: "Tabs 标签页",
                            link: "/doc/tabs"
                        },
                        {
                            title: "Form 表单",
                            link: "/doc/form"
                        },
                        {
                            title: "Anchor 锚点",
                            link: "/doc/anchor"
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
@acticv: #1890ff;
@aside-width: 180px;

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
        padding-left: @aside-width;
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
        padding: 16px 32px;
    }
}
aside {
    width: @aside-width;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    z-index: 10;
    border-right: 1px solid #e8e8e8;
    background: white;
    > h2 {
        margin-bottom: 4px;
    }
    > ol {
        > li {
            > a {
                font-size: 14px;
                text-overflow: ellipsis;
                overflow: hidden;
                padding-left: 30px;
                display: block;
                margin-bottom: 8px;
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                color: #314659;
                &:hover {
                    color: @acticv;
                }
                &.router-link-active {
                    background-color: #e6f7ff;
                    color: #1890ff;
                }
            }
            > .components {
                padding: 8px 16px;
                padding-left: 30px;
                color: rgba(0, 0, 0, 0.45);
                font-size: 16px;
                line-height: 1.5;
                &-item {
                    font-size: 14px;
                    color: #314659;
                    padding-left: 52px;
                    > .chinese {
                        font-size: 12px;
                        margin-left: 6px;
                        font-weight: 400;
                        opacity: 0.67;
                    }
                }
            }
        }
    }
}
main {
    overflow: auto;
}
</style>
