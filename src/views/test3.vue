<template>
    <div></div>
</template>

<script>
import { findComponentsUpward } from "@utils/assist"
export default {
    data() {
        return {}
    },
    mounted() {
        const parents = findComponentsUpward(this, "test")
        console.log(parents)
        parents.forEach(item => {
            console.log(item.name)
        })
    }
}
</script>

<style lang="less" scoped></style>
