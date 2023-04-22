const express = require('express')
const router = express.Router()

// 楼层信息
const floors = [
	{
		id:getRand(4),
		desc:'自然堂CHANDO美妆个护专场 2.5折起自然堂CHANDO美妆个护专场',
		img:'https://pic1.imgdb.cn/item/64421fbc0d2dde577716be3b.jpg',
		kw:'自然堂美妆'
	},
	{
		id:getRand(4),
		desc:'都市丽人内衣专场 5折封顶都市丽人内衣专场',
		img:'https://pic1.imgdb.cn/item/64421fbd0d2dde577716be5f.jpg',
		kw:'都市丽人内衣'
	},
	{
		id:getRand(4),
		desc:'乔丹专场 1.8折起乔丹专场',
		img:'https://pic1.imgdb.cn/item/64421fbd0d2dde577716be86.jpg',
		kw:'乔丹'
	},
	{
		id:getRand(4),
		desc:'BANANA BABY女装专场 3.7折封顶BANANA BABY女装专场',
		img:'https://pic1.imgdb.cn/item/64421fbd0d2dde577716bec8.jpg',
		kw:'BANANA女装'
	},
	{
		id:getRand(4),
		desc:'精致防晒女孩分会场 1.1折起精致防晒女孩分会场',
		img:'https://pic1.imgdb.cn/item/64421fbd0d2dde577716befc.jpg',
		kw:'防晒'
	},
	{
		id:getRand(4),
		desc:'Disney baby母婴鞋服专场 4.3折封顶Disney baby母婴鞋服专场',
		img:'https://pic1.imgdb.cn/item/644221e20d2dde57771bc214.jpg',
		kw:'Disney母婴鞋服'
	},
	{
		id:getRand(4),
		desc:'百雀羚PECHOIN美容护肤专场 2折起百雀羚PECHOIN美容护肤专场',
		img:'https://pic1.imgdb.cn/item/644221e20d2dde57771bc261.jpg',
		kw:'百雀羚美容护肤'
	},
	{
		id:getRand(4),
		desc:'DKNY男女装专场 2.5折封顶DKNY男女装专场',
		img:'https://pic1.imgdb.cn/item/644221e30d2dde57771bc2d5.jpg',
		kw:'DKNY男女装'
	},
	{
		id:getRand(4),
		desc:'七匹狼SEPTWOLVES男装专场 0.8折起七匹狼SEPTWOLVES男装专场',
		img:'https://pic1.imgdb.cn/item/644221e30d2dde57771bc32c.jpg',
		kw:'七匹狼男装'
	},
	{
		id:getRand(4),
		desc:'小猪班纳母婴鞋服专场 1.2折起小猪班纳母婴鞋服专场',
		img:'https://pic1.imgdb.cn/item/644221e30d2dde57771bc367.jpg',
		kw:'小猪班纳母婴鞋服'
	},
	{
		id:getRand(4),
		desc:'户外型男 1.2折起户外型男',
		img:'https://pic1.imgdb.cn/item/644221fe0d2dde57771c0b46.jpg',
		kw:'户外'
	},
	{
		id:getRand(4),
		desc:'太平鸟男装专场 1.8折起太平鸟男装专场',
		img:'https://pic1.imgdb.cn/item/644221fe0d2dde57771c0b7d.jpg',
		kw:'太平鸟男装'
	},
	{
		id:getRand(4),
		desc:'飞利浦PHILIPS专场 2.3折起飞利浦PHILIPS专场',
		img:'https://pic1.imgdb.cn/item/644221ff0d2dde57771c0bac.jpg',
		kw:'飞利浦PHILIPS'
	},
	{
		id:getRand(4),
		desc:'富安娜Fuanna床上用品专场 0.8折起富安娜Fuanna床上用品专场',
		img:'https://pic1.imgdb.cn/item/644221ff0d2dde57771c0bf1.jpg',
		kw:'床上用品'
	},
	{
		id:getRand(4),
		desc:'探路者TOREAD专场 1.4折起探路者TOREAD专场',
		img:'https://pic1.imgdb.cn/item/644221ff0d2dde57771c0c1c.jpg',
		kw:'探路者TOREAD'
	},
	{
		id:getRand(4),
		desc:'卡西欧CASIO石英表专场 2.2折起卡西欧CASIO石英表专场',
		img:'https://pic1.imgdb.cn/item/6442220a0d2dde57771c3494.jpg',
		kw:'卡西欧CASIO石英表'
	},
	{
		id:getRand(4),
		desc:'三枪内衣疯抢专场 3折封顶三枪内衣疯抢专场',
		img:'https://pic1.imgdb.cn/item/6442220b0d2dde57771c34dd.jpg',
		kw:'三枪内衣'
	},
	{
		id:getRand(4),
		desc:'一叶子One Leaf面部护理专场 2.2折起一叶子One Leaf面部护理专场',
		img:'https://pic1.imgdb.cn/item/6442220b0d2dde57771c3555.jpg',
		kw:'一叶子面部护理'
	},
	{
		id:getRand(4),
		desc:'美的Midea餐厨用具电器专场 2折起美的Midea餐厨用具电器专场',
		img:'https://pic1.imgdb.cn/item/6442220b0d2dde57771c35d8.jpg',
		kw:'餐厨用具电器'
	},
	{
		id:getRand(4),
		desc:'爱步ECCO男女鞋专场 9.3折起爱步ECCO男女鞋专场',
		img:'https://pic1.imgdb.cn/item/644225ae0d2dde5777214acc.jpg',
		kw:'男女鞋'
	},
	{
		id:getRand(4),
		desc:'saucony运动户外专场 2.2折起saucony运动户外专场',
		img:'https://pic1.imgdb.cn/item/644222170d2dde57771c4af6.jpg',
		kw:'运动户外'
	},
	{
		id:getRand(4),
		desc:'李宁LI-NING专场 2折起李宁LI-NING专场',
		img:'https://pic1.imgdb.cn/item/644222180d2dde57771c4b30.jpg',
		kw:'李宁LI-NING'
	},
	{
		id:getRand(4),
		desc:'安踏ANTA专场 1.8折起安踏ANTA专场',
		img:'https://pic1.imgdb.cn/item/644222180d2dde57771c4b50.jpg',
		kw:'安踏ANTA'
	},
	{
		id:getRand(4),
		desc:'OPPO数码电子专场 4.8折起OPPO数码电子专场',
		img:'https://pic1.imgdb.cn/item/644222180d2dde57771c4b69.jpg',
		kw:'数码电子'
	},
	{
		id:getRand(4),
		desc:'华为HUAWEI数码电子专场 3.5折起华为HUAWEI数码电子专场',
		img:'https://pic1.imgdb.cn/item/6442220b0d2dde57771c361e.jpg',
		kw:'华为数码电子'
	},
	{
		id:getRand(4),
		desc:'6IXTY 8IGHT内衣专场 3.4折起6IXTY 8IGHT内衣专场',
		img:'https://pic1.imgdb.cn/item/644222260d2dde57771c60e9.jpg',
		kw:'内衣专场'
	},
	{
		id:getRand(4),
		desc:'小米MI数码家电专场 4.7折起小米MI数码家电专场',
		img:'https://pic1.imgdb.cn/item/644222260d2dde57771c6148.jpg',
		kw:'小米MI数码家电'
	},
	{
		id:getRand(4),
		desc:'慕诗涵女装专场 4折封顶慕诗涵女装专场',
		img:'https://pic1.imgdb.cn/item/644222260d2dde57771c6188.jpg',
		kw:'慕诗涵女装'
	},
	{
		id:getRand(4),
		desc:'奢姿女装专场 3.9折封顶奢姿女装专场',
		img:'https://pic1.imgdb.cn/item/644222260d2dde57771c61e6.jpg',
		kw:'奢姿女装'
	},
	{
		id:getRand(4),
		desc:'联想lenovo数码电子专场 2.3折起联想lenovo数码电子专场',
		img:'https://pic1.imgdb.cn/item/644222270d2dde57771c622b.jpg',
		kw:'lenovo数码电子'
	},
	{
		id:getRand(4),
		desc:'babycare母婴用品专场 1.6折起babycare母婴用品专场',
		img:'https://pic1.imgdb.cn/item/6442222f0d2dde57771c6f95.jpg',
		kw:'babycare母婴用品'
	},
	{
		id:getRand(4),
		desc:'潘多拉PANDORA珠宝首饰专场 3.2折起潘多拉PANDORA珠宝首饰专场',
		img:'https://pic1.imgdb.cn/item/6442222f0d2dde57771c6fde.jpg',
		kw:'PANDORA珠宝首饰'
	}
]
// 存储楼层信息，用于响应给前端
let newFloors = []

// 定义一个获取自定义长度的随机字符串
function getRand(length) {
  let result = ''
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charLength = char.length
  for (let i = 0; i < length; i++) {
    result += char.charAt(Math.floor(Math.random() * charLength))
  }
  return result
}

// 获取轮播图
router.get('/api/swiper',(req,res)=>{
	const swiper = [
		{
			id: getRand(5),
			image:'https://s1.ax1x.com/2023/04/12/ppj3Xp6.jpg'
		},
		{
			id: getRand(5),
			image:'https://s1.ax1x.com/2023/04/12/ppj3qt1.jpg'
		},
		{
			id: getRand(5),
			image:'https://s1.ax1x.com/2023/04/12/ppj3ywj.jpg'
		},
		{
			id: getRand(5),
			image:'https://s1.ax1x.com/2023/04/12/ppj3B6S.jpg'
		},
		{
			id: getRand(5),
			image:'https://s1.ax1x.com/2023/04/12/ppj30l8.jpg'
		},
		{
			id: getRand(5),
			image:'https://s1.ax1x.com/2023/04/12/ppj3afP.jpg'
		},
		{
			id: getRand(5),
			image:'https://s1.ax1x.com/2023/04/12/ppjlFhV.jpg'
		}
	]
	res.send({
		status:200,
		msg:'请求成功',
		data:swiper
	}).end()
})

// 获取导航栏
router.get('/api/navList',(req,res)=>{
	const navList = [
		{
			id:getRand(5),
			title:'分类',
			img_url:'https://s1.ax1x.com/2023/04/21/p9AXyQJ.png'
		},
		{
			id:getRand(5),
			title:'个人中心',
			img_url:'https://s1.ax1x.com/2023/04/21/p9AXrz4.png'
		}
	]
	res.send({
		status:200,
		msg:'请求成功',
		data:navList
	}).end()
})

// 获取楼层信息
router.post('/api/floor',(req,res)=>{
	let {page,pageSize} = req.body
	let curPage = page //当前页
	pageSize = Math.floor(pageSize) //一次返回的条数
	const total = floors.length //总条数
	const size = Math.ceil(total/pageSize)
	let t = curPage % size
	const flg = total/pageSize
	let done = false // 判断是否加载完毕，默认false
	// 判断数据是否加载完毕
	if(curPage > flg){ //已全部加载
		// 此时修改done未true，表示已全部加载完毕
		done = true
		res.send({
			status:200,
			msg:'已全部加载完毕',
			done
		})
	}
	else{	// 未全部加载
		if(t * pageSize + pageSize -1 <= total)
			newFloors = floors.slice(t * pageSize,t * pageSize + pageSize)
		else
			newFloors = floors.slice(t * pageSize,total)
		res.send({
			status:200,
			msg:'请求成功',
			data:newFloors,
			done
		}).end()
	}
	
})
// 通过下拉刷新重新获取楼层信息
router.post('/api/newfloor',(req,res)=>{
	// console.log(req.body)
	let curPage = req.body.page
	const pageSize = req.body.pageSize
	newFloors = floors.slice(curPage,curPage + pageSize)
	res.send({
		status:200,
		msg:'请求成功',
		data:newFloors
	}).end()
})
// 获取楼层总数
router.get('/api/floorsLen',(req,res)=>{
	res.send({status:200,msg:"请求数据成功",data:floors.length}).end()
})
module.exports = router