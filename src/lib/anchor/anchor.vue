<template>
    <div @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"s-anchor",
    props: {
        href: {
            type: String,
            required: true
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    methods: {
        onClick() {
            const anchor = document.querySelector(this.href)
            let total = anchor.offsetTop + this.offset
            // // Chrome
            document.body.scrollTop = total
            // // Firefox
            document.documentElement.scrollTop = total
            // // Safari
            window.pageYOffset = total
        }
    }
}
</script>

<style></style>
