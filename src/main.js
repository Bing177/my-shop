import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import store from './store'

Vue.config.productionTip = false

App.mpType = 'app'
uni.$showMsg = function(title='数据加载失败!',duration=1500,icon='none'){
	uni.showToast({
		icon,
		title,
		duration
	})
}
const app = new Vue({
  ...App,
  store
})
app.$mount()
