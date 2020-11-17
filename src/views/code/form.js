let code = {}
code.demo = `
<template>
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
</template>

<script>
export default {
    data(){
        return{
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
`
export default code
