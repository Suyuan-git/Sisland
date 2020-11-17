<template>
    <div>
        <div class="markdown">
            <h1>Anchor 锚点</h1>
            <h2>代码演示</h2>
        </div>

        <m-code title="基础用法" directions="最简单的用法" :code="code.demo">
            <s-anchor href="#test">
                <s-button>点击跳转锚点</s-button>
            </s-anchor>
        </m-code>
        <div id="test" style="margin-top:500px" >锚点处</div>
    </div>
</template>

<script>
import code from "@views/code/anchor"
import MCode from "@components/m-code/m-code"
import SAnchor from "@lib/anchor/anchor"
import SButton from "@lib/button/button"
export default {
    components: {
        MCode,
        SButton,
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
