import axios from "axios"
import Cookie from 'js-cookie'

const { URL } = require("@http/config.js")

let config = {
    baseURL: URL,
    timeout: 60 * 1000, // Timeout
    withCredentials: true, // Check cross-site Access-Control
    headers: {}
}

const _axios = axios.create(config)

// 请求拦截器
_axios.interceptors.request.use(
    function(config) {
        //Token处理
        config.headers.TOKEN = Cookie.get('Token') || ""

        return config
    },
    function(error) {
        return Promise.reject(error)
    }
)

// 响应拦截器
_axios.interceptors.response.use(
    function(res) {
        if (res.data.code == 200) {
            return res.data.data
        } else {
            // 请求成功的错误处理
        }
    },
    function(error) {
        // 请求失败的错误处理
        return Promise.reject(error)
    }
)

export default _axios