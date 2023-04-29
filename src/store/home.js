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
		},
		// 上拉触底获取楼层图
		async getFloorInfo({commit},payload){
			try{
				const res = await request.post('/shop/api/floor',3000,
					{
						page:payload.page,
						pageSize:payload.pageSize,
					},
				)
				if(res.done === true)
					return uni.$showMsg(res.msg)
				commit('GETFLOORINFO',res.data)
			}catch(e){
				uni.$showMsg(e.message)
			}
		},
		// 下拉刷新获取新的楼层信息
		async getNewFloorInfo({commit},{page,pageSize}){
			try{
				const res = await request.post('/shop/api/newfloor',3000,{page,pageSize})
				commit('GETNEWFLOORINFO',res.data)
				uni.$showMsg('刷新成功')
				uni.stopPullDownRefresh()
			}catch(e){
				uni.$showMsg(e.message)
			}
		},
		// 获取楼层长度
		async getFloorsLen({commit}){
			try{
				const res = await request.get('/shop/api/floorsLen')
				commit('GETFLOORSLEN',res.data)
			}catch(e){
				uni.$showMsg(e.message)
			}
		},
	},
	mutations:{
		GETSWIPER(state,data){
			state.swipers = data
		},
		GETFLOORINFO(state,data){
			state.floors = [...state.floors,...data]
			// 在每次放入元素时，都要去重
			// 1.将floors数组对象利用Set去重，再将每一项转为字符串
			const t = new Set(state.floors.map(f=>JSON.stringify(f)))
			// 2.清空floors
			state.floors.length = 0
			// 3.将处理好的t存到floors
			t.forEach(i=>{
				state.floors.push(JSON.parse(i))
			})
		},
		GETNEWFLOORINFO(state,data){
			state.floors = [...data,...state.floors]
			// 在每次放入元素时，都要去重 
			// 1.将floors数组对象利用Set去重，再将每一项转为字符串
			const t = new Set(state.floors.map(f=>JSON.stringify(f)))
			// 2.清空floors
			state.floors.length = 0
			// 3.将处理好的t存到floors
			t.forEach(i=>{
				state.floors.unshift(JSON.parse(i))
			})
		},
		GETFLOORSLEN(state,data){
			state.floorsLen = data
		},
	},
	state:{
		swipers:[],//轮播图
		floors:[],//楼层信息
		newFloors:[],
		floorsLen:0,
	}
}