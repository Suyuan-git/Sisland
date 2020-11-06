<template>
    <div>
        <s-switch v-model="value" disabled></s-switch>
    </div>
</template>

<script>
import SSwitch from "@lib/switch/switch"
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