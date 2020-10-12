let code = {}
code.demo1 = `
<template>
    <div>
        <s-button>default</s-button>
        <s-button type="primary">primary</s-button>
        <s-button type="link">link</s-button>
        <s-button type="text">text</s-button>
    </div>
</template>
`

code.demo2 = `
<template>
    <div>
        <div>
            <s-button size="small">default</s-button>
            <s-button>default</s-button>
            <s-button size="large">default</s-button>
        </div>
        <div>
            <s-button type="primary" size="small">primary</s-button>
            <s-button type="primary">primary</s-button>
            <s-button type="primary" size="large">primary</s-button>
        </div>
        <div>
            <s-button type="link" size="small">link</s-button>
            <s-button type="link">link</s-button>
            <s-button type="link" size="large">link</s-button>
        </div>
        <div>
            <s-button type="text" size="small">text</s-button>
            <s-button type="text">text</s-button>
            <s-button type="text" size="large">text</s-button>
        </div>
    </div>
</template>
`

code.demo3 = `
<template>
    <div>
        <s-button disabled>default</s-button>
        <s-button type="primary" disabled>primary</s-button>
        <s-button type="link" disabled>link</s-button>
        <s-button type="text" disabled>text</s-button>
    </div>
</template>
`

code.demo4 = `
<template>
    <div>
        <s-button loading>default</s-button>
    </div>
</template>
`
export default code
