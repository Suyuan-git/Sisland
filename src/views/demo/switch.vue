<template>
    <div>
        <div class="markdown">
            <h1>Switch 开关</h1>
            <h2>代码演示</h2>
        </div>
        <m-code title="基本用法" directions="最简单的用法。" :code="code.demo1">
            <switch-demo1></switch-demo1>
        </m-code>

        <m-code title="不可用" directions="Switch 失效状态。" :code="code.demo2">
            <switch-demo2></switch-demo2>
        </m-code>
    </div>
</template>

<script>
import SButton from "@lib/button/button"
import SwitchDemo1 from "@views/demo/switch.demo1.vue"
import SwitchDemo2 from "@views/demo/switch.demo2.vue"
import code from "@views/code/switch"
import MCode from "@components/m-code/m-code"
export default {
    components: {
        SButton,
        SwitchDemo1,
        SwitchDemo2,
        MCode
    },
    data() {
        return {
            code: code
        }
    }
}
</script>

<style lang="less" scoped></style>
