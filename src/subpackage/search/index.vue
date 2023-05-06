<template>
	<view class="search-box">
		<view class="search">
			<!-- 顶部搜索栏 -->
			<uni-search-bar 
			class="search-bar" 
			@input="input"
			@confirm="search"
			@focus="focus"
			@blur="blur"
			v-model="kw"
			:focus="true"
			cancelButton="none" 
			placeholder="请输入品牌或商品名称"
			bgColor="#fff"
			:radius="100"
			>
			</uni-search-bar>
			<!-- 搜索建议列表 -->
			<view class="suggest" :style="{display:displaySuggest}">
				<view class="suggest-item" v-for="(goods,i) of searchList" @click="toGoodsList(goods)" :key="i">{{goods.kw}}</view>
			</view>
			<!-- 搜索历史 -->
			<view class="history" v-show="this.historys.length>0">
				<!-- 顶部操作区域 -->
				<view class="top">
					<view class="left">
						<uni-icons type="eye" size="20" style="vertical-align: middle;"></uni-icons>
						<text>历史记录</text>
					</view>
					<view class="right" @click="clearHistory">
						<text>清除全部</text>
						<uni-icons type="trash" size="20" style="vertical-align: middle;"></uni-icons>
					</view>
				</view>
				<!-- 底部展示区域 -->
				<view class="footer">
					<view class="history-item" v-for="(h,i) of historys" @click="getHistory(h)" :key="i">{{h.key}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import request from '../../utils/request'
	export default {
		data() {
			return{
				timer:undefined,
				kw:'',
				searchList:[],//搜索结果列表
				displaySuggest:'none',//是否展示搜索建议
				historys:[],//存放搜索历史
			}
		},
		methods:{
			input(val){
				clearTimeout(this.timer)
				this.timer = setTimeout(()=>{
					this.kw = val.trim()
					this.getSearchList()
				},2000)
			},
			search(res){
				let key = res.value.trim()
				const history = {
					id:Math.random().toString().substring(2,6),
					key
				}
				if(key){
					this.historys = [history,...this.historys]
					uni.setStorageSync('historys',JSON.stringify(this.historys))
				}
			},
			toGoodsList(goods){
				// console.log(goods)
				uni.navigateTo({
					url:`/subpackage/goods_list/index?id=${goods.id}&kw=${goods.kw}`
				})
			},
			focus(){
				this.displaySuggest = 'block'
			},
			blur(){
				this.displaySuggest = 'none'
			},
			getSearchList(){
				if(!this.kw)this.searchList.length = 0
				request.get(`/shop/api/search?query=${this.kw}`)
				.then(res=>{
					if(!res.length)return uni.$showMsg('对不起，暂未找到相关商品')
					this.searchList = res
				})
			},
			getHistory(history){
				this.kw = history.key
			},
			clearHistory(){
				uni.clearStorageSync()
				this.historys = []
			}
		},
		mounted() {
			this.historys = JSON.parse(uni.getStorageSync('historys')||'[]')
		}
	}
</script>

<style lang="scss" scoped>
.search-box{
	// 搜索区
	.search{
		position: sticky;
		top: 0;
		width:100%;
		background-color: #283C86;
		z-index: 999;
		// 搜索栏
		.search-bar{
			font-size: 28rpx;
			font-weight: 600;
		}
		// 搜索建议
		.suggest{
			display: none;
			position: absolute;
			left: 50%;
			width: 95%;
			border-radius: 10rpx;
			transform: translateX(-50%);
			border: 5rpx solid #afafaf;
			border-bottom: none;
			background-color: rgba(255,255,255,.8);
			z-index: 999;
			// 建议项
			.suggest-item{
				width: 100%;
				height: 80rpx;
				line-height: 80rpx;
				text-indent: 2rem;
				border-bottom: 5rpx solid #afafaf;
				
			}
		}
		// 历史记录区
		.history{
			position: relative;
			left:0;
			width:100%;
			border:4rpx solid #ccc;
			background-color: #cfcfcf;
			.top{
				width: inherit;
				height: 70rpx;
				border-bottom: 4rpx solid #f1f1f1;
				.left{
					float: left;
					width: 220rpx;
					height: 100%;
					line-height: 60rpx;
					text-align: center;
					font-size: 30rpx;
				}
				.right{
					float: right;
					width: 260rpx;
					height: 100%;
					line-height: 60rpx;
					text-align: center;
					font-size: 30rpx;
				}
			}
			.footer{
				width: inherit;
				padding-top: 10rpx;
				padding-left: 20rpx;
				padding-bottom: 10rpx;
				.history-item{
					display: inline-block;
					height: 30rpx;
					line-height: 30rpx;
					padding: 10rpx 15rpx;
					margin-right: 40rpx;
					margin-top: 20rpx;
					background-color: #fff;
					border-radius: 10rpx;
					font-family: 'Times New Roman', Times, serif;
					color: #283C86;
				}
			}
			
		}
	}
}
</style>