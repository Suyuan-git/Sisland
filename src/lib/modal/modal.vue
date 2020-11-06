<template>
    <div v-if="value">
        <div class="vu-modal-mask" @click="maskClick"></div>
        <div class="vu-modal-wrapper">
            <div class="vu-modal">
                <header><slot name="title">标题</slot> <span @click="close" class="vu-modal-close"></span></header>
                <main>
                    <slot name="content">
                        <slot></slot>
                    </slot>
                </main>
                <footer>
                    <s-button type="text" @click="cancel">取消</s-button>
                    <s-button type="primary" @click="ok">确认</s-button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import SButton from "@lib/button/button"
export default {
    name:"s-modal",
    components: {
        SButton
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        maskClose: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        close() {
            this.$emit("input", false)
        },
        maskClick() {
            if (this.maskClose) {
                this.cancel()
            }
        },
        ok() {
            this.$emit("ok")
            this.close()
        },
        cancel() {
            this.$emit("cancel")
            this.close()
        }
    }
}
</script>

<style lang="less" scoped>
@radius: 4px;
@border-color: #e8e8e8;
.vu-modal {
    background: white;
    border-radius: @radius;
    box-shadow: 0 0 3px fadeout(black, 50%);
    min-width: 30em;
    max-width: 90%;

    &-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fadeout(black, 50%);
        z-index: 10;
    }
    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }
    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 24px;
        color: rgba(0, 0, 0, 0.65);
        background: #fff;
        border-bottom: 1px solid #e8e8e8;
        border-radius: 4px 4px 0 0;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        word-wrap: break-word;
    }
    > main {
        padding: 24px;
    }
    > footer {
        border-top: 1px solid @border-color;
        padding: 10px 16px;
        text-align: right;
    }
    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;
        &::before,
        &::after {
            content: "";
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }
        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}
@media (max-width: 500px) {
    .vu-modal{
        min-width: 20em;
    }
}
</style>
