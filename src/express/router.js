const express = require('express')
const router = express.Router()

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

router.get('/api/navList/',(req,res)=>{
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

module.exports = router