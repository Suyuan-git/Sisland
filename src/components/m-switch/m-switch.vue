<template>
    <div>
        <button class="flex-sc">
            <span class="circle"></span>
        </button>
    </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@h: 30px;
@color-bg: #2d8cf0;
@color-circle-bg: #fff;

button {
    height: @h;
    width: @h*2;
    border: none;
    border-radius: 20px;
    background: @color-bg;
}
.circle {
    display: inline-block;
    width: @h*0.8;
    height: @h*0.8;
    border-radius: 20px;
    background: @color-circle-bg;
}
</style>
