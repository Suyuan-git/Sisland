<docs>
## This is an Example component.
</docs>
<template>
    <div>
        <v-switch v-model="value"></v-switch>
    </div>
</template>

<script>
import VSwitch from "@lib/v-switch"
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