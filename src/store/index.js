import Vue from "vue"
import Vuex from 'vuex'
import home from './home'
import category from './category'
import goodsList from './goodsList'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		home,
		category,
		goodsList,
	}
})
