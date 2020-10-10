<template>
    <div>
        tabs
        <h2>示例1</h2>
        <v-tabs v-model="value">
            <v-tab label="Tab1" name="1">内容1</v-tab>
            <v-tab label="Tab2" name="2">内容2</v-tab>
        </v-tabs>
    </div>
</template>

<script>
import VTabs from "@lib/v-tabs"
import VTab from "@lib/v-tab"
export default {
    components: {
        VTabs,
        VTab
    },
    data() {
        return {
            value: "1"
        }
    }
}
</script>

<style></style>
