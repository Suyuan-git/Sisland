<template>
    <div>
        <div class="markdown">
            <h1>Modal 对话框</h1>
            <h2>代码演示</h2>
        </div>

        <m-code title="基本" directions="第一个对话框。" :code="code.demo1">
            <s-button type="primary" @click="visible1 = !visible1">显示对话框</s-button>
            <s-modal v-model="visible1">
                <p>第一行内容</p>
                <p>第二行内容</p>
                <p>第三行内容</p>
            </s-modal>
        </m-code>

        <m-code title="点击蒙层是否允许关闭" directions="默认可以关闭,添加 maskClose 为false不可关闭" :code="code.demo2">
            <s-button type="primary" @click="visible2 = !visible2">显示对话框</s-button>
            <s-modal v-model="visible2" :maskClose="false">
                <p>第一行内容</p>
                <p>第二行内容</p>
                <p>第三行内容</p>
            </s-modal>
        </m-code>

        <m-code title="事件" directions="ok事件和cancel事件" :code="code.demo3">
            <s-button type="primary" @click="visible3 = !visible3">显示对话框</s-button>
            <s-modal v-model="visible3" @ok="handleOk" @cancel="handleCancel">
                <p>第一行内容</p>
                <p>第二行内容</p>
                <p>第三行内容</p>
            </s-modal>
        </m-code>
    </div>
</template>

<script>
import MCode from "@components/m-code"
import code from "@views/code/modal"
import SModal from "@lib/s-modal"
import SButton from "@lib/s-button"
export default {
    components: {
        MCode,
        SModal,
        SButton
    },
    data() {
        return {
            visible1: false,
            visible2: false,
            visible3: false,
            code: code
        }
    },
    methods: {
        handleOk() {
            console.log("ok")
        },
        handleCancel() {
            console.log("cancel")
        }
    }
}
</script>

<style></style>
