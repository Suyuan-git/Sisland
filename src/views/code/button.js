let code = {}
code.demo1 = `
<template>
    <div>
        <v-button>default</v-button>
        <v-button type="primary">primary</v-button>
        <v-button type="link">link</v-button>
        <v-button type="text">text</v-button>
    </div>
</template>
`

code.demo2 = `
<template>
    <div>
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
    </div>
</template>
`

code.demo3 = `
<template>
    <div>
        <v-button disabled>default</v-button>
        <v-button type="primary" disabled>primary</v-button>
        <v-button type="link" disabled>link</v-button>
        <v-button type="text" disabled>text</v-button>
    </div>
</template>
`

code.demo4 = `
<template>
    <div>
        <v-button loading>default</v-button>
    </div>
</template>
`
export default code
