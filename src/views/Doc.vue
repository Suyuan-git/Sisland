<template>
    <div>
        <m-topnav></m-topnav>
        <div class="content">
            <aside v-if="asideVisible">
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
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
    }
}
</script>

<style lang="less" scoped>
aside {
    background: lightblue;
    width: 150px;
    padding: 16px;

    > h2 {
        margin-bottom: 4px;
    }
    > ol {
        > li {
            padding: 4px 0;
        }
    }
    @media (max-width: 500px) {
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 60px;
    }
}
</style>
