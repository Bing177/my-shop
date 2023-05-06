import request from "../utils/request"

export default {
	namespaced:true,
	actions:{
		// 获取allGoods长度
		async getAllGoodsLen({commit}){
			try{
				const res = await request.get('/shop/api/allgoodslen')
				commit('GETGOODSLen',res.data)
			}catch(e){
				uni.$showMsg(e.message)
			}
		},
		// 上拉触底获取总商品信息
		async getAllGoodsInfo({commit},payload){
			try{
				const res = await request.post('/shop/api/allgoods',3000,{
					page:payload.page,
					pageSize:payload.pageSize,
				})
				if(res.done)return uni.$showMsg(res.msg)
				commit('GETALLGOODSINFO',res.data)
			}catch(e){
				uni.$showMsg(e.message)
			}
		},
		// 下拉刷新获取总商品信息
		async getNewAllGoodsInfo({commit},{page,pageSize}){
			try{
				const res = await request.post('/shop/api/newallgoods',3000,{
					page,pageSize
				})
				commit('GETNEWALLGOODSINFO',res.data)
				uni.$showMsg('刷新成功')
				uni.stopPullDownRefresh()
			}catch(e){
				uni.$showMsg(e.message)
			}
		},
		// 根据一二级分类返回对应商品
		async getGoodsInfo({commit},payload){
			try{
				const res = await request.get(`/shop/api/goods?kw=${payload.kw}&brand=${payload.brand}`)
				commit('GETGOODSINFO',res.data)
			}catch(e){
				uni.$showMsg(e.message)
			}
		},
		// 根据kw关键词返回对应商品
		async getGoodsInfoByQuery({commit},payload){
			try{
				const res = await request.get(`/shop/api/goodsbyquery?kw=${payload.kw}`)
				commit('GETGOODSINFO',res.data)
			}catch(e){
				uni.$showMsg(e.message)
			}
		}
	},
	mutations:{
		GETALLGOODSINFO(state,data){
			state.allGoods = [...state.allGoods,...data]
			// 在每次放入元素时，都要去重
			// 1.将allGoods数组对象利用Set去重，再将每一项转为字符串
			const t = new Set(state.allGoods.map(f=>JSON.stringify(f)))
			// 2.清空allGoods
			state.allGoods.length = 0
			// 3.将处理好的t存到allGoods
			t.forEach(i=>{
				state.allGoods.push(JSON.parse(i))
			})
		},
		GETNEWALLGOODSINFO(state,data){
			state.allGoods = [...data,...state.allGoods]
			// 在每次放入元素时，都要去重 
			// 1.将allGoods数组对象利用Set去重，再将每一项转为字符串
			const t = new Set(state.allGoods.map(f=>JSON.stringify(f)))
			// 2.清空allGoods
			state.allGoods.length = 0
			// 3.将处理好的t存到allGoods
			t.forEach(i=>{
				state.allGoods.unshift(JSON.parse(i))
			})
		},
		GETGOODSINFO(state,data){
			state.goods = data
		},
		GETGOODSLen(state,data){
			state.allGoodsLen = data
		}
	},
	state:{
		allGoods:[],//存放所用商品
		goods:[],//根据一二级分类存放对应商品
		goodsQuery:[],//根据关键词存放对应商品
		allGoodsLen:0
	},
	getters:{}
}