// 用户请求
import $axios from '@http/index.js' //别名

export function getTopBanner() {
	return $axios.get('/getTopBanner')
}