// 用户管理
import Cookie from "js-cookie"
const _token = Cookie.get("token")

export default {
    namespaced: true,
    state: () => ({
        token: _token || "",
        hasLogin: _token ? true : false,
        userInfo: Cookie.get("userInfo") || {}
    }),
    mutations: {
        login(state, token) {
            //登录
            state.hasLogin = true
            state.token = token
            // 缓存本地
            Cookie.set("token", token)
        },
        logout(state) {
            //退出登录
            state.hasLogin = false
            state.token = ""
            // 清除所有缓存
            Cookies.remove("token")
            Cookies.remove("userInfo")
        },
        addUserInfo(state, userInfo) {
            //用户信息
            state.userInfo = userInfo
            // 缓存本地
            Cookie.set("userInfo", userInfo)
        }
    }
}
