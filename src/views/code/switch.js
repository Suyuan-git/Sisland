let code = {}
code.demo1 = `
<template>
    <div>
        <s-switch v-model="value"></s-switch>
    </div>
</template>

<script>
export default {
    components: {
        SSwitch
    },
    data() {
        return {
            value: true
        }
    }
}
</script>
`

code.demo2 = `
<template>
    <div>
        <s-switch v-model="value" disabled></s-switch>
    </div>
</template>

<script>
export default {
    components: {
        SSwitch
    },
    data() {
        return {
            value: false
        }
    }
}
</script>
`
export default code
