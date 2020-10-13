<template>
    <div>
        <div class="markdown">
            <h1>Button 按钮</h1>
            <h2>代码演示</h2>
        </div>

        <m-code title="按钮类型" directions="按钮有四种类型：默认按钮、主按钮、链接按钮、文本按钮。" :code="code.demo1">
            <s-button>default</s-button>
            <s-button type="primary">primary</s-button>
            <s-button type="link">link</s-button>
            <s-button type="text">text</s-button>
        </m-code>

        <m-code
            title="按钮尺寸"
            directions="按钮有大、中、小三种尺寸。
通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。"
            :code="code.demo2"
        >
            <div>
                <s-button size="small">default</s-button>
                <s-button>default</s-button>
                <s-button size="large">default</s-button>
            </div>
            <div style="margin:10px 0">
                <s-button type="primary" size="small">primary</s-button>
                <s-button type="primary">primary</s-button>
                <s-button type="primary" size="large">primary</s-button>
            </div>
            <div>
                <s-button type="link" size="small">link</s-button>
                <s-button type="link">link</s-button>
                <s-button type="link" size="large">link</s-button>
            </div>
            <div>
                <s-button type="text" size="small">text</s-button>
                <s-button type="text">text</s-button>
                <s-button type="text" size="large">text</s-button>
            </div>
        </m-code>

        <m-code title="不可用状态" directions="添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。" :code="code.demo3">
            <s-button disabled>default</s-button>
            <s-button type="primary" disabled>primary</s-button>
            <s-button type="link" disabled>link</s-button>
            <s-button type="text" disabled>text</s-button>
        </m-code>

        <m-code title="加载中状态" directions="添加 loading 属性即可让按钮处于加载状态。" :code="code.demo4">
            <s-button loading>default</s-button>
        </m-code>

    </div>
</template>

<script>
import MCode from "@components/m-code"
import code from "@views/code/button"
import SButton from "@lib/Button"
export default {
    components: {
        SButton,
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
