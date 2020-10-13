<template>
    <div class="code-box">
        <div class="code-box-demo">
            <slot></slot>
        </div>
        <div class="code-box-meta markdown">
            <h4>{{ title }}</h4>
            <p>{{ directions }}</p>
        </div>
        <div v-highlight>
            <pre><code class="html">{{code}}</code></pre>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "标题"
        },
        directions: {
            type: String,
            default: "说明"
        },
        code: {
            type: String,
            defaulr: ""
        }
    }
}
</script>

<style lang="less" scoped>
.code-box {
    border: 1px solid #ebedf0;
    border-radius: 2px;
    display: inline-block;
    width: 100%;
    position: relative;
    margin: 0 0 16px;
    transition: all 0.2s;
}
.code-box-demo {
    border-bottom: 1px solid #ebedf0;
    padding: 42px 24px 50px;
    color: rgba(0, 0, 0, 0.65);
}
.code-box-meta.markdown {
    position: relative;
    width: 100%;
    font-size: 14px;
    border-radius: 0 0 2px 2px;
    transition: background-color 0.4s;
    border-bottom: 1px dashed #ebedf0;
}
.markdown {
    color: #314659;
    font-size: 14px;
    line-height: 2;
}
.code-box-meta .demo-description > p,
.code-box-meta > p {
    font-size: 12px;
    margin: 0.5em 0;
    padding: 18px 24px 12px;
    width: 100%;
    word-break: break-word;
}
.code-box-meta .demo-description > h4,
.code-box-meta > h4 {
    position: absolute;
    top: -20px;
    padding: 1px 8px;
    margin-left: 16px;
    color: #777;
    border-radius: 2px 2px 0 0;
    background: #fff;
    font-size: 14px;
    width: auto;
}
</style>
