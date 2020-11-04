<template>
    <div class="vu-tabs">
        <div class="vu-tabs-nav">
            <div :class="tabCls(item)" v-for="(item, index) in navList" @click="handleChange(index)" :key="item.name">
                {{ item.label }}
            </div>
            <!-- <div class="vu-tabs-nav-indicator"></div> -->
        </div>

        <div class="vu-tabs-content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: "s-tabs",
    props: {
        value: [String, Number],
        required: true
    },
    data() {
        return {
            currentValue: this.value,
            navList: [],
            tabTtems: []
        }
    },
    watch: {
        value: function(val) {
            this.currentValue = val
        },
        currentValue() {
            this.updateStatus()
        }
    },
    created() {
        this.initItems()
    },
    methods: {
        initItems() {
            this.$on("on-tabs-tab-add", item => {
                this.tabTtems.push(item)
            })
            this.$on("on-tabs-tab-remove", item => {
                this.tabTtems.splice(this.tabTtems.indexOf(item), 1)
            })
        },
        tabCls(item) {
            return [
                "vu-tabs-nav-item",
                {
                    "vu-tabs-nav-active": item.name === this.currentValue
                }
            ]
        },
        updateNav() {
            //获取标题，name,并放置到navList数组中
            this.navList = []
            this.tabTtems.forEach((pane, index) => {
                this.navList.push({
                    label: pane.label,
                    name: pane.name || index
                })
                if (!pane.name) pane.name = index
                if (index === 0) {
                    if (!this.currentValue) {
                        this.currentValue = pane.name || index
                    }
                }
            })
            this.updateStatus()
        },
        updateStatus() {
            this.tabTtems.forEach(tab => {
                let b = tab.name === this.currentValue
                tab.show = b
                return tab.show
            })
        },
        handleChange(index) {
            let nav = this.navList[index]
            let name = nav.name
            this.currentValue = name
            this.$emit("input", name)
            this.$emit("on-click", name)
        }
    }
}
</script>

<style lang="less" scoped>
@blue: #40a9ff;
@color: #333;
@border-color: #d9d9d9;
.vu-tabs {
    &-nav {
        display: flex;
        color: @color;
        border-bottom: 1px solid @border-color;
        position: relative;
        margin-bottom: 16px;
        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;
            &:first-child {
                margin-left: 0;
            }
        }
        &-active {
            color: @blue;
        }
        &-indicator {
            position: absolute;
            height: 2px;
            background: #1890ff;
            left: 0;
            bottom: -1px;
            width: 50px;
        }
    }

    &-content {
        padding: 8px 0;
    }
}
</style>
