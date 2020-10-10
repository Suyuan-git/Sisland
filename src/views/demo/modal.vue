<template>
    <div>
        <h2>Modal 示例</h2>
        <v-button type="primary" @click="modal1 = !modal1">显示对话框</v-button>
        <v-modal v-model="modal1" @ok="modalOK" @cancel="modalCancel">
            <template v-slot:title>自定义标题</template>
            <template v-slot:content>自定义内容</template>
        </v-modal>
    </div>
</template>

<script>
import VModal from "@lib/v-modal"
import VButton from "@lib/v-button"
export default {
    components: {
        VModal,
        VButton
    },
    data() {
        return {
            modal1: false
        }
    },
    methods:{
        modalOK(){
            console.log("ok")
        },
        modalCancel(){
            console.log("cancel")
        }
    }
}
</script>

<style></style>
