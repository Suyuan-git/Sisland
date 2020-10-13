<template>
    <div>
        <div class="markdown">
            <h1>Tabs 标签页</h1>
            <h2>代码演示</h2>
        </div>

        <m-code title="基本用法" directions="默认选中第一项。" :code="code.demo1">
            <s-tabs v-model="value">
                <s-tab label="Tab1" name="1">Content of Tab Pane 1</s-tab>
                <s-tab label="Tab2" name="2">Content of Tab Pane 2</s-tab>
            </s-tabs>
        </m-code>
    </div>
</template>

<script>
import STabs from "@lib/Tabs"
import STab from "@lib/Tab"
import MCode from "@components/m-code"
import code from "@views/code/tabs"
export default {
    components: {
        STabs,
        STab,
        MCode
    },
    data() {
        return {
            value: "1",
            code: code
        }
    }
}
</script>

<style></style>
