<template>
    <div class="markdown-body">
        <h2>引入 VU-UI</h2>
        <pre><code>import {Button, Tabs, Switch, Modal} from "VU-UI"</code></pre>

        <h2>Vue 单文件组件</h2>
        <p>以Button组件为示例：</p>

        <pre><code>&lt;template&gt;
  &lt;div&gt;&lt;v-button&gt;按钮&lt;/v-button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {VButton} from "VU-UI"
  export default {
    components: {VButton}
  }
&lt;/script&gt;
 </code></pre>

    </div>
</template>

<script>
export default {}
</script>

<style></style>
