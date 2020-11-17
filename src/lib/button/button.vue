<template>
    <button v-on="$listeners" :disabled="disabled" class="vu-button" :class="buttonClass">
        <span v-if="loading" class="vu-button-loading"></span>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "s-button",
    props: {
        type: {
            type: String,
            default: "default",
            validator(value) {
                return ["default", "primary", "text", "link"].includes(value)
            }
        },
        size: {
            type: String,
            default: "default",
            validator(value) {
                return ["default", "large", "small"].includes(value)
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        buttonClass() {
            return {
                [`vu-type-${this.type}`]: this.type,
                [`vu-size-${this.size}`]: this.size
            }
        }
    }
}
</script>

<style lang="less">
@h: 32px;
@border-color: #d9d9d9;
@color: #333;
@blue: #1890ff;
@radius: 4px;
@disabled-color: #c5c8ce;
@disabled-bg-color: #f5f5f5;

.vu-button {
    box-sizing: border-box;
    height: @h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: @color;
    border: 1px solid @border-color;
    border-radius: @radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    // + 相邻选择器
    & + & {
        margin-left: 8px;
    }

    &:focus {
        outline: none;
    }
    &::-moz-focus-inner {
        border: 0;
    }

    //type
    &.vu-type-default {
        &:hover,
        &:focus {
            color: @blue;
            border-color: @blue;
        }
        // [value] 用于选取属性值中有value的元素
        &[disabled] {
            border-color: @border-color;
            color: @disabled-color;
            background: @disabled-bg-color;
        }
    }

    &.vu-type-primary {
        color: #fff;
        background-color: @blue;
        border-color: @blue;
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
        &:hover,
        &:focus {
            background: lighten(@blue, 10%);
            border-color: lighten(@blue, 10%);
        }
        &[disabled] {
            border-color: @border-color;
            color: @disabled-color;
            background: @disabled-bg-color;
        }
    }

    &.vu-type-link {
        border-color: transparent;
        box-shadow: none;
        color: @blue;
        &:hover,
        &:focus {
            color: lighten(@blue, 10%); //变亮
        }
        &[disabled] {
            color: @disabled-color;
        }
    }
    &.vu-type-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;
        &:hover,
        &:focus {
            background: darken(white, 5%); //变暗
        }
    }
    // size
    &.vu-size-large {
        height: 40px;
        padding: 0 15px;
        font-size: 16px;
    }
    &.vu-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }
    // disabled
    &[disabled] {
        color: #c5c8ce;
        cursor: not-allowed;
    }

    > .vu-button-loading {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: @blue @blue @blue transparent;
        border-style: solid;
        border-width: 1px;
        animation: vu-spin 1s infinite linear;
    }
}
@keyframes vu-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
