<template>
    <button @click="toggle" :class="{ checked: value }" class="vu-switch">
        <span></span>
    </button>
</template>

<script>
export default {
    name:"s-switch",
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {}
    },
    methods: {
        toggle() {
            this.$emit("input", !this.value)
        }
    }
}
</script>

<style lang="less">
@h: 22px;
@h2: @h - 4px;
.vu-switch {
    width: @h*2;
    height: @h;
    border-radius: @h / 2;
    background: #ccc;
    border: none;
    position: relative;
    cursor: pointer;

    &:focus {
        outline: none;
    }
    &.checked {
        background: #1890ff;
        & > span {
            left: calc(100% - @h2 - 2px);
        }
    }
    > span {
        width: @h2;
        height: @h2;
        border-radius: @h2;
        background: white;
        position: absolute;
        top: 2px;
        left: 2px;
        transition: all 0.36s ease 0s;
    }
}

[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
}
</style>
