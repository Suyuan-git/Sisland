<template>
    <div>
        <s-form :model="form" :rules="rules" ref="form">
            <s-form-item label="Name" prop="name">
                <s-input v-model="form.name"></s-input>
            </s-form-item>
            <s-form-item label="Name2" prop="name2">
                <s-input v-model="form.name2"></s-input>
            </s-form-item>
            <button @click="reset">重置</button>
            <button @click="submit">提交</button>
        </s-form>
    </div>
</template>

<script>
import SForm from "@lib/form/form"
import SFormItem from "@lib/form-item/form-item"
import SInput from "@lib/input/input"
export default {
    components: {
        SInput,
        SForm,
        SFormItem
    },
    data() {
        return {
            form: {
                name: "",
                name2: ""
            },
            rules: {
                name: [{ required: true, message: "用户名不能为空", trigger: "blur" },{ required: true, message: "用户名不能为空", trigger: "change" }],
                name2: [{ required: false, message: "用户名不能为空", trigger: "blur" }]
            }
        }
    },
    methods: {
        reset() {
            this.$refs.form.reset()
        },
        submit() {
            this.$refs.form
                .validate()
                .then(res => {
                    console.log("pass");
                })
                .catch(() => {
                    console.log("error");
                })
        }
    }
}
</script>

<style lang="less" scoped></style>