<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "s-form",
    props: {
        model: {
            type: Object
        },
        rules: {
            type: Object
        }
    },
    provide() {
        return {
            form: this
        }
    },
    data() {
        return {
            items: []
        }
    },
    created() {
        this.$on("on-form-item-add", this.onFormItemAdd)
        this.$on("on-form-item-remove", this.onFormRemove)
    },
    methods: {
        onFormItemAdd(item) {
            if (item.prop) {
                this.items.push(item)
            }
        },
        onFormRemove(item) {
            if (item.prop) {
                this.items.splice(this.items.indexOf(item), 1)
            }
        },
        reset() {
            this.items.forEach(item => {
                item.reset()
            })
        },
        validate() {
            return new Promise((resolve, reject) => {
                let valid = true
                let count = 0
                this.items.forEach(item => {
                    item.validate("", errors => {
                        if (errors) {
                            valid = false
                        }
                        if (++count === this.items.length) {
                            if (valid) {
                                resolve()
                            } else {
                                reject()
                            }
                        }
                    })
                })
            })
        }
    }
}
</script>

<style lang="less" scoped></style>
