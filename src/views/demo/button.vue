<template>
    <div>
        <div>Button 按钮</div>
        <h1>type</h1>
        <div>
            <v-button>default</v-button>
            <v-button type="primary">primary</v-button>
            <v-button type="link">link</v-button>
            <v-button type="text">text</v-button>
        </div>
        <h1>size</h1>
        <div>
            <v-button size="small">default</v-button>
            <v-button>default</v-button>
            <v-button size="large">default</v-button>
        </div>
        <div>
            <v-button type="primary" size="small">primary</v-button>
            <v-button type="primary">primary</v-button>
            <v-button type="primary" size="large">primary</v-button>
        </div>
        <div>
            <v-button type="link" size="small">link</v-button>
            <v-button type="link">link</v-button>
            <v-button type="link" size="large">link</v-button>
        </div>
        <div>
            <v-button type="text" size="small">text</v-button>
            <v-button type="text">text</v-button>
            <v-button type="text" size="large">text</v-button>
        </div>
        <h1>disable</h1>
        <div>
            <v-button disabled>default</v-button>
            <v-button type="primary" disabled>primary</v-button>
            <v-button type="link" disabled>link</v-button>
            <v-button type="text" disabled>text</v-button>
        </div>
        <h1>loading</h1>
        <div>
            <v-button loading>default</v-button>
        </div>
    </div>
</template>

<script>
import VButton from "@lib/v-button"
export default {
    components: {
        VButton
    },
    methods: {}
}
</script>

<style></style>
