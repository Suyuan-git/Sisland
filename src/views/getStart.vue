<template>
    <div class="markdown-body">
        <h2>引入 Sisland</h2>
        <pre><code>import {Button, Tabs, Switch, Modal} from "sisland"</code></pre>

        <h2>Vue 单文件组件</h2>
        <p>以Button组件为示例：</p>

        <pre><code>&lt;template&gt;
  &lt;div&gt;&lt;s-button&gt;按钮&lt;/s-button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {SButton} from "sisland"
  export default {
    components: {SButton}
  }
&lt;/script&gt;
 </code></pre>

    </div>
</template>

<script>
export default {}
</script>

<style></style>
