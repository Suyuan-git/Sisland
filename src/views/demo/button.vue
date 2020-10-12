<template>
    <div>
        <div class="markdown">
            <h1>Button 按钮</h1>
            <h2>代码演示</h2>
        </div>

        <m-code title="按钮类型" directions="按钮有四种类型：默认按钮、主按钮、链接按钮、文本按钮。" :code="code.demo1">
            <v-button>default</v-button>
            <v-button type="primary">primary</v-button>
            <v-button type="link">link</v-button>
            <v-button type="text">text</v-button>
        </m-code>

        <m-code
            title="按钮尺寸"
            directions="按钮有大、中、小三种尺寸。
通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。"
            :code="code.demo2"
        >
            <div>
                <v-button size="small">default</v-button>
                <v-button>default</v-button>
                <v-button size="large">default</v-button>
            </div>
            <div style="margin:10px 0">
                <v-button type="primary" size="small">primary</v-button>
                <v-button type="primary">primary</v-button>
                <v-button type="primary" size="large">primary</v-button>
            </div>
            <div>
                <v-button type="link" size="small">link</v-button>
                <v-button type="link">link</v-button>
                <v-button type="link" size="large">link</v-button>
            </div>
            <div>
                <v-button type="text" size="small">text</v-button>
                <v-button type="text">text</v-button>
                <v-button type="text" size="large">text</v-button>
            </div>
        </m-code>

        <m-code title="不可用状态" directions="添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。" :code="code.demo3">
            <v-button disabled>default</v-button>
            <v-button type="primary" disabled>primary</v-button>
            <v-button type="link" disabled>link</v-button>
            <v-button type="text" disabled>text</v-button>
        </m-code>

        <m-code title="加载中状态" directions="添加 loading 属性即可让按钮处于加载状态。" :code="code.demo4">
            <v-button loading>default</v-button>
        </m-code>

    </div>
</template>

<script>
import MCode from "@components/m-code"
import code from "@views/code/button"
import VButton from "@lib/v-button"
export default {
    components: {
        VButton,
        MCode
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
