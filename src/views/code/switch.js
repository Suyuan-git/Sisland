let code = {}
code.demo1 = `
<template>
    <div>
        <v-switch v-model="value"></v-switch>
    </div>
</template>

<script>
export default {
    components: {
        VSwitch
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
        <v-switch v-model="value" disabled></v-switch>
    </div>
</template>

<script>
export default {
    components: {
        VSwitch
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
