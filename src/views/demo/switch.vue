<template>
    <div>
        <div>
            <h1>代码演示</h1>
            <div class="demo">
                <h2>常规用法</h2>
                <div class="demo-component">
                    <switch-demo1></switch-demo1>
                </div>
                <div class="demo-actions">
                    <v-button>查看代码</v-button>
                    {{docs}}
                </div>
            </div>
            <div class="demo">
                <h2>支持 disabled</h2>
                <div class="demo-component">
                    <switch-demo2></switch-demo2>
                </div>
                <div class="demo-actions">
                    <v-button>查看代码</v-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VButton from "@lib/v-button"
import SwitchDemo1 from "@views/demo/switch.demo1.vue"
import SwitchDemo2 from "@views/demo/switch.demo2.vue"
export default {
    components: {
        VButton,
        SwitchDemo1,
        SwitchDemo2
    },
    data() {
        return {
            value: true,
            docs: SwitchDemo1.__docs
        }
    }
}
</script>

<style lang="less" scoped>
@border-color: #d9d9d9;
.demo {
    border: 1px solid @border-color;
    margin: 16px 0 32px;
    > h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid @border-color;
    }
    &-component {
        padding: 16px;
    }
    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed @border-color;
    }
    &-code {
        padding: 8px 16px;
        border-top: 1px dashed @border-color;
        > pre {
            line-height: 1.1;
            font-family: Consolas, "Courier New", Courier, monospace;
            margin: 0;
        }
    }
}
</style>
