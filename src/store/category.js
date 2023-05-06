import request from '@/utils/request'

export default {
	namespaced:true,
	actions:{
		// 获取分类信息
		async getCategory({commit}){
			try{
				const res = await request.get('/shop/api/category')
				commit('GETCATEGORY',res.data)
			}catch(e){
				uni.$showMsg(e.message)
			}
		},
	},
	mutations:{
		GETCATEGORY(state,data){
			state.category = data
		},
	},
	state:{
		category:[],//分类
	},
	getters:{}
}