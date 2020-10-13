<template>
    <div class="markdown-body">
        <h2>引入 sisland-ui</h2>
        <p>main.js 文件</p>
        <div v-highlight>
            <pre><code class="js">import sisland from 'sisland-ui';
    import 'sisland-ui/dist/sisland.css';
    Vue.use(sisland);</code></pre>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.hljs {
    color: #525252;
    font-size: 14px;
    font-family: Consolas, Menlo, Courier, monospace;
    background: #fff;
}
</style>
