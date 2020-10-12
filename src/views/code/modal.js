let code = {}
code.demo1 = `
<template>
    <div>
        <s-button type="primary" @click="showModal">显示对话框</s-button>
        <s-modal v-model="visible">
            <p>第一行内容</p>
            <p>第二行内容</p>
            <p>第三行内容</p>
        </s-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible:false
        }
    },
    methods: {
        showModal() {
          this.visible = true;
        }
    }
}
</script>
`

code.demo2 = `
<template>
    <div>
        <s-button type="primary" @click="showModal">显示对话框</s-button>
        <s-modal v-model="visible" :maskClose="false">
            <p>第一行内容</p>
            <p>第二行内容</p>
            <p>第三行内容</p>
        </s-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible:false
        }
    },
    methods: {
        showModal() {
          this.visible = true;
        }
    }
}
</script>
`

code.demo3 = `
<template>
    <div>
        <s-button type="primary" @click="showModal">显示对话框</s-button>
        <s-modal v-model="visible" @ok="handleOk" @cancel="handleCancel">
            <p>第一行内容</p>
            <p>第二行内容</p>
            <p>第三行内容</p>
        </s-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible:false
        }
    },
    methods: {
        showModal() {
          this.visible = true;
        },
        handleOk() {
            console.log("ok")
        },
        handleCancel() {
            console.log("cancel")
        }
    }
}
</script>
`
export default code
