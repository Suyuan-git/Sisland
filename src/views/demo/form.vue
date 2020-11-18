<template>
    <div>
        <div class="markdown">
            <h1>Form 表单</h1>
            <p>使用 <a href="https://github.com/yiminghe/async-validator" target="_blank" style="color: #1890ff">async-validator</a> 库作为校验库</p>
            <h2>代码演示</h2>
        </div>
        <m-code title="基本使用" :code="code.demo">
            <s-form :model="form" :rules="rules" ref="form">
                <s-form-item label="账户" prop="user">
                    <s-input v-model="form.user"></s-input>
                </s-form-item>
                <s-form-item label="密码" prop="password">
                    <s-input v-model="form.password"></s-input>
                </s-form-item>
                <s-form-item>
                    <s-button @click="reset">重置</s-button>
                    <s-button type="primary" @click="submit">提交</s-button>
                </s-form-item>
            </s-form>
        </m-code>
    </div>
</template>
  
<script>
import SForm from "@lib/form/form"
import SFormItem from "@lib/form-item/form-item"
import SInput from "@lib/input/input"
import SButton from "@lib/button/button"
import MCode from "@components/m-code/m-code"
import code from "@views/code/form"

export default {
    components: {
        SInput,
        SForm,
        SButton,
        SFormItem,
        MCode
    },
    data() {
        return {
            code,

            form: {
                user: "",
                password: ""
            },
            rules: {
                user: [
                    { required: true, message: "用户名不能为空", trigger: "blur" },
                    { required: true, message: "用户名不能为空", trigger: "change" }
                ],
                password: [
                    { required: true, message: "密码不能为空", trigger: "blur" },
                    { required: true, message: "密码不能为空", trigger: "change" }
                ]
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
                    console.log("pass")
                })
                .catch(() => {
                    console.log("error")
                })
        }
    }
}
</script>

<style lang="less" scoped>
.submit {
    padding: 10px 0;
}
</style>
