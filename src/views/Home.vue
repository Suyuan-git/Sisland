<template>
    <div class="home">
        <m-topnav></m-topnav>
        <div class="banner">
            <h1 class="title">Sisland</h1>
            <h2 class="description">一个好用的UI框架</h2>
            <p class="actions">
                <router-link to="/doc/introduce">开始使用</router-link>
                <a href="https://github.com/XuYuanV/Sisland" target="_blank">GitHub</a>
            </p>
        </div>
        <ul>
            <li>
                <img src="https://cn.vuejs.org/images/logo.png" class="vue" />
                <h3>基于 Vue 2</h3>
                <p>基于Vue 2 框架开发</p>
            </li>
            <li>
                <img src="http://s.nodejs.cn/less/img/logo.png" class="vue" />
                <h3>使用Less</h3>
                <p>动态样式语言</p>
            </li>
            <li>
                <img src="../../static/images/light.png" class="vue" />
                <h3>代码易读</h3>
                <p>组件代码都极其简洁</p>
            </li>
        </ul>
    </div>
</template>

<script>
import MTopnav from "@components/m-topnav/m-topnav"
export default {
    components: { MTopnav },
    data() {
        return {
            value:true
        }
    },
    methods: {}
}
</script>

<style lang="less" scoped>
@h: 28px;
@green: #02bcb0;
@border-radius: 32px;
@color: #007974;
.banner {
    color: @color;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
    > .title {
        font-size: 3.2em;
        font-weight: 300;
    }
    > .description {
        margin: 24px;
    }
    > .actions {
        padding: 8px 0;
        a {
            height: auto;
            line-height: 1.5715;
            font-size: 16px;
            display: inline-block;
            margin: 0 8px;
            outline: none;
            cursor: pointer;
            background: @green;
            color: white;
            padding: 8px 24px;
            border-radius: @border-radius;
            text-align: center;
            &:hover {
                text-decoration: none;
            }
        }
    }
}
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    > li {
        width: 300px;
        margin: 16px 0;
        display: grid;
        justify-content: center;
        align-content: space-between;
        grid-template-areas:
            "icon title"
            "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;
        > .vue {
            grid-area: icon;
            width: 64px;
            height: 64px;
        }
        > h3 {
            grid-area: title;
            font-size: 28px;
        }
        > p {
            grid-area: text;
        }
    }
}
</style>
