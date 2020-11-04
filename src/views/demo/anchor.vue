<template>
    <div>
        <div class="markdown">
            <h1>Anchor 锚点</h1>
            <h2>代码演示</h2>
        </div>

        <m-code title="基础用法" directions="最简单的用法" :code="code.demo">
            <s-anchor href="#test">点击跳转到 id为#test的元素</s-anchor>
        </m-code>
        <div id="test" style="margin-top:500px" >#test</div>
    </div>
</template>

<script>
import code from "@views/code/anchor"
import SAnchor from "@lib/Anchor.vue"
export default {
    components: {
        SAnchor
    },
    data() {
        return {
            code: code
        }
    },
    methods: {}
}
</script>

<style></style>
