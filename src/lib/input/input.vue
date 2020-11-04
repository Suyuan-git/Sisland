<template>
    <input type="text" v-bind="$attrs" :value="currentValue" @input="handleInput" @blur="handleBlur" />
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

<style lang="less" scoped></style>
