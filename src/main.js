import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios'
import filters from '@/filter/filter'
import '@/assets/css/base.css'
import toast from '@/components/common/toast'
//全局注册过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
}) 
// 配置请求的根路径
Axios.defaults.baseURL = 'http://123.207.32.32:8000'
// 将axios挂载在vue实例的原型中，这样就可以在任何地方使用
Vue.prototype.$http = Axios
Vue.config.productionTip = false
Vue.use(toast)

// 路由
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
