import request from '../utils/request.js'
export default {
	namespaced:true,
	actions:{
		// 获取轮播图
		async getSwiper({commit}){
			try{
				const res = await request.get('/shop/api/swiper')
				commit('GETSWIPER',res.data)
			}catch(e){
				uni.$showMsg(e.message)
			}
		}
	},
	mutations:{
		GETSWIPER(state,data){
			state.swipers = data
		}
	},
	state:{
		swipers:[],//轮播图
	},
	getters:{}
}