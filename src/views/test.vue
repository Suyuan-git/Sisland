<template>
    <div>
        <test2></test2>   
    </div>
</template>

<script>
import test2 from "@views/test2"
export default {
    name:'test',
    components: {
        test2
    },
    data() {
        return {
            name:"1"
        }
    }
}
</script>

<style lang="less" scoped></style>
