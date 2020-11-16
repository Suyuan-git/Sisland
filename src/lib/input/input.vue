<template>
    <input type="text" v-bind="$attrs" :value="currentValue" @input="handleInput" @blur="handleBlur" class="sld-input" />
</template>

<script>
import Emitter from "@mixins/emitter"
export default {
    name: "s-input",
    mixins: [Emitter],
    props: {
        value: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    watch: {
        value(val) {
            this.currentValue = val
        }
    },
    methods: {
        handleInput(event) {
            const value = event.target.value
            this.currentValue = value
            this.$emit("input", value)
            this.dispatch("s-form-item", "on-form-change", value)
        },
        handleBlur() {
            this.dispatch("s-form-item", "on-form-blur", this.currentValue)
        }
    }
}
</script>

<style lang="less" scoped>
.sld-input {
    font-variant: tabular-nums;
    padding: 4px 11px;
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
}
</style>
