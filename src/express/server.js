/* 该文件用于搭建本地服务器 */
const express = require('express')
const fs = require('fs')
const https = require('https')
const router = require('./router')
const app = express()

const options = {
	key:fs.readFileSync('./server.key'),
	cert:fs.readFileSync('./server.cert')
}
// 对请求体格式处理
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/shop',router)

const server = https.createServer(options,app)

server.listen(8888,err=>{
	if(err)return err
	console.log('https://localhost:8888')
})