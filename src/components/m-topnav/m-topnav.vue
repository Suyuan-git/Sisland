<template>
    <div class="topnav flex-cc">
        <router-link to="/" class="logo">VU-UI</router-link>
        <ul class="menu flex">
            <li>
                <router-link to="/doc/introduce">文档</router-link>
            </li>
        </ul>
        <img v-if="menuShow" src="@static/images/menu.png" @click="toggleAside" class="toggleAside" />
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    props: {
        menuShow: {
            type: Boolean,
            default: false
        }
    },
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
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
    justify-content: center;
    align-items: center;
    > .logo {
        max-width: 6em;
        margin-right: auto;
        text-decoration: none;
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin: 0 1em;
            color: #6e6d73;
        }
    }
    > .toggleAside {
        width: 24px;
        height: 24px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
    }
    @media (max-width: 500px) {
        > .menu {
            display: none;
        }
        > .logo {
            margin: 0 auto;
        }
        > .toggleAside {
            display: inline-block;
        }
    }
}
</style>
