export default {
    namespaced: true,
    state: () => ({
        // 判断屏幕宽度,改变aside的状态
        asideVisible: document.documentElement.clientWidth <= 500 ? false : true
    }),
    mutations: {
        asideVisible(state, value) {
            state.asideVisible = value
        }
    }
}
