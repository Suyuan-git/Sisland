<template>
    <div class="form_item">
        <label v-if="label" :class="{ form_item_label_required: isRequired }">{{ label }}</label>
        <slot></slot>
        <div v-if="validateState === 'error'" class="form_item_message">
            {{ validateMessage }}
        </div>
    </div>
</template>

<script>
import AsyncValidator from "async-validator"
import Emitter from "@mixins/emitter"
export default {
    name: "s-form-item",
    inject: ["form"],
    mixins: [Emitter],
    props: {
        label: {
            type: String
        },
        prop: {
            type: String
        }
    },
    data() {
        return {
            isRequired: false, //是否为必填
            validateState: "", // 校验状态
            validateMessage: "" // 校验不通过时的提示信息
        }
    },
    computed: {
        itemVlue() {
            return this.form.model[this.prop]
        }
    },
    mounted() {
        if (this.prop) {
            this.dispatch("s-form", "on-form-item-add", this)
        }
        this.$once("hook:beforeDestroy", () => {
            this.dispatch("s-form", "on-form-item-remove", this)
        })

        // 设置初始值，以便在重置时恢复默认值
        this.initialValue = this.itemVlue

        this.setRules()
    },
    methods: {
        setRules() {
            let rules = this.getRules()
            if (rules.length) {
                rules.every(rule => {
                    this.isRequired = rule.required
                })
            }

            this.$on("on-form-blur", this.onItemBlur)
            this.$on("on-form-change", this.onItemChange)
        },
        onItemBlur() {
            this.validate("blur")
        },
        onItemChange(value) {
            this.validate("change")
        },
        getRules() {
            let formRules = this.form.rules
            formRules = formRules ? formRules[this.prop] : []
            return [].concat(formRules || [])
        },
        getRulesItem(trigger) {
            const rules = this.getRules()
            return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
        },
        /**
         * 校验数据
         * @param trigger 校验类型
         * @param callback 回调函数
         */
        validate(trigger, callback = function() {}) {
            let rules = this.getRulesItem(trigger)

            if (!rules || rules.length === 0) {
                return true
            }

            // 设置状态为校验中
            this.validateState = "validating"

            // async-validator
            const validator = new AsyncValidator({ [this.prop]: rules })

            // PROMISE USAGE
            validator.validate({ [this.prop]: this.itemVlue }, { firstFields: true }, errors => {
                this.validateState = !errors ? "success" : "error"
                this.validateMessage = errors ? errors[0].message : ""

                callback(this.validateMessage)
            })
        },
        // 重置数据
        reset() {
            this.validateState = ""
            this.validateMessage = ""
            this.form.model[this.prop] = this.initialValue
        }
    }
}
</script>

<style lang="less" scoped>
@bottom: 20px;

.form_item {
    .flex-sc;
    flex-wrap: nowrap;
    margin-bottom: @bottom;
    position: relative;
    .form_item_label_required:before {
        content: "*";
        color: red;
        position: relative;
        top: 50%;
    }
    .form_item_message {
        position: absolute;
        bottom: -@bottom;
        color: red;
        left: 3em;
    }
}
</style>
