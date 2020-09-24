<template>
    <div class="topnav flex-cc">
        <div class="logo" >LOGO</div>
        <ul class="menu flex">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <span class="toggleAside" @click="toggleAside"></span>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState({
            asideVisible: state => state.aside.asideVisible
        })
    },
    methods: {
        toggleAside() {
            this.$store.commit("aside/asideVisible", !this.asideVisible)
        }
    }
}
</script>

<style lang="less" scoped>
.topnav {
    background: pink;
    padding: 16px;
    position: relative;
    z-index: 99;
    > .logo {
        max-width: 6em;
        margin-right: auto;
    }

    > .menu {
        > li {
            margin: 0 1em;
        }
    }
    > .toggleAside {
        display: inline-block;
        width: 24px;
        height: 24px;
        background: red;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
    }
    // 屏幕尺寸小于500 隐藏菜单,显示切换按钮
    @media (max-width: 500px) {
        > .menu {
            display: none;
        }
        > .logo {
            margin: 0 auto;
        }
        > .toggleAside{
            display: inline-block;
        }
    }
}
</style>
