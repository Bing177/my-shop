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
		// 获取具体分类信息
		async getProductInfo({commit},type){{
			try{
				const res = await request.get(`/shop/api/${type}`)
				// console.log(res.data)
				commit('GETPRODUCTINFO',[res.data,type])
			}catch(e){
				uni.$showMsg(e.message)
			}
		}}
	},
	mutations:{
		GETCATEGORY(state,data){
			state.category = data
		},
		GETPRODUCTINFO(state,data){
			// console.log(data)
			switch(data[1]){
				case 'digtalElectronics':
					state.digtalElectronics = data[0]
					break
				case 'beauty':
					state.beauty = data[0]
					break
				case 'jordon':
					state.jordon = data[0]
					break
				case 'lining':
					state.lining = data[0]
					break
				case 'anta':
					state.anta = data[0]
					break
				case 'pcbaby':
					state.pcbaby = data[0]
					break
				case 'beddings':
					state.beddings = data[0]
					break
				case 'outdoors':
					state.outdoors = data[0]
					break
				case 'philips':
					state.philips = data[0]
					break
				case 'toread':
					state.toread = data[0]
					break
				case 'casio':
					state.casio = data[0]
					break
				case 'kitchen':
					state.kitchen = data[0]
					break
				case 'jewelry':
					state.jewelry = data[0]
					break
				default: break
			}
			
		}
	},
	state:{
		category:[],//分类
		digtalElectronics:[],//数码电子
		beauty:[],//美容美妆
		jordon:[],//乔丹
		lining:[],//李宁
		anta:[],//安踏
		pcbaby:[],//母婴用品
		beddings:[],//床上用品,
		outdoors:[],//户外,
		philips:[],//飞利浦,
		toread:[],//探路者
		casio:[],//卡西欧
		kitchen:[],//餐厨电器
		jewelry:[],//珠宝首饰
	},
	getters:{}
}