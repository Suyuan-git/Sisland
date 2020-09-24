<template>
    <div>
        <m-topnav></m-topnav>
        <div class="banner">
            <h1>VU-UI</h1>
            <h2>一个基于Vue2的ui框架</h2>
            <p class="actions">
                <a href="https://github.com/XuYuanV/VU-UI">GitHub</a>
                <router-link to="doc">开始</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import MTopnav from "@components/m-topnav/m-topnav"
export default {
    components: { MTopnav },
    data() {
        return {}
    },
    created() {},
    mounted() {},
    methods: {}
}
</script>

<style lang="less" scoped>
@h: 28px;
.banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: lightgreen;
    > .actions {
        padding: 8px 0;
        a {
            margin: 0 8px;
            background: #fff;
            display: inline-block;
            line-height: 28px;
            height: @h;
            line-height: @h;
            border-radius: @h / 2;
            padding: 0 8px;
        }
    }
}
</style>
