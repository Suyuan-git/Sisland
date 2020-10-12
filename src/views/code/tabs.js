let code = {}
code.demo1 = `
<template>
    <div>
        <v-tabs v-model="value">
            <v-tab label="Tab1" name="1">Content of Tab Pane 1</v-tab>
            <v-tab label="Tab2" name="2">Content of Tab Pane 2</v-tab>
        </v-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "1"
        }
    }
}
</script>
`
export default code