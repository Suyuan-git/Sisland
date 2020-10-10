<template>
    <div class="pane" v-show="show">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'tab',
    props: {
        name: {
            type: String
        },
        label: {
            type: String,
            default: ""
        }
    },
    computed: {
        active() {
            return false
        }
    },
    mounted() {
        this.updateNav()
    },
    watch: {
        label() {
            this.updateNav()
        }
    },
    data() {
        return {
            show: true
        }
    },
    methods: {
        updateNav() {
            this.$parent.updateNav()
        }
    }
}
</script>

<style></style>
