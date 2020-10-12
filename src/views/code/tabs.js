let code = {}
code.demo1 = `
<template>
    <div>
        <s-tabs v-model="value">
            <s-tab label="Tab1" name="1">Content of Tab Pane 1</s-tab>
            <s-tab label="Tab2" name="2">Content of Tab Pane 2</s-tab>
        </s-tabs>
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