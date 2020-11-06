<template>
    <div class="pane" v-show="show">
        <slot></slot>
    </div>
</template>

<script>
import Emitter from "@mixins/emitter"
export default {
    name: "s-tab",
    mixins: [Emitter],
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
        this.dispatch("s-tabs", "on-tabs-tab-add", this)
        this.$once("hook:beforeDestroy", () => {
            this.dispatch("s-tabs", "on-tabs-tab-remove", this)
        })

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
