<template>
    <div>
        <div class="markdown">
            <h1>Input 输入框</h1>
            <h2>代码演示</h2>
        </div>

        <m-code title="输入框" directions="">
            <s-input></s-input>
        </m-code>
    </div>
</template>

<script>
import MCode from "@components/m-code/m-code"
import SInput from "@lib/input/input"
export default {
    components: {
        MCode,
        SInput
    }
}
</script>

<style></style>
