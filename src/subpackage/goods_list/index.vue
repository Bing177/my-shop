<template>
	<!-- 商品列表页 -->
	<view class="goods-list">
		<view class="goods-title">
			<h1>商品列表</h1>
		</view>
		<!-- 未带参数进入 -->
		<block v-if="isQuery">
			<!-- 根据关键词展示对应商品 -->
			<view class="goods-query">
				<view class="goods" v-for="(g,i) of goods" :key="i">
					<image class="image" :src="g.url" mode="aspectFit"></image>
					<view class="price">￥{{g.price}}.00</view>
					<block v-if="g.abstract">
						<view class="abstract">{{g.abstract}}</view>
					</block>
					<block v-else>
						<view class="abstract">{{g.name}}</view>
					</block>
				</view>
			</view>
		</block>
		<!-- 带参数进入 -->
		<block v-else>
			<!-- 展示所有商品信息 -->
			<view class="all-goods">
				<view class="goods" v-for="(g,i) of allGoods" :key="g.id">
					<image class="image" :src="g.url" mode="aspectFit"></image>
					<view class="price">￥{{g.price}}.00</view>
					<block v-if="g.abstract">
						<view class="abstract">{{g.abstract}}</view>
					</block>
					<block v-else>
						<view class="abstract">{{g.name}}</view>
					</block>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import {debounce} from 'lodash'
	export default {
		data() {
			return {
				isQuery:false,//是否传递参数进入该页面，默认false
				page:0,//当前页
				pageSize:10,//一次性返回的页数
			};
		},
		computed:{
			...mapState('goodsList',['allGoods','allGoodsLen','goods']),
		},
		methods:{
			debounce:debounce(function(){
				this.$store.dispatch('goodsList/getAllGoodsInfo',{
					page:this.page++,pageSize:this.pageSize,
				})
			},500)
		},
		onReachBottom(){
			this.debounce()
		},
		onPullDownRefresh(){
			const t = parseInt(this.allGoodsLen / this.pageSize)
			const r = parseInt(Math.random() * t)
			let i = r * this.pageSize
			this.$store.dispatch('goodsList/getNewAllGoodsInfo',{page:i,pageSize:this.pageSize})
		},
		onLoad(options){
			JSON.stringify(options) === '{}' ?
			this.isQuery = false :
			this.isQuery = options
			const {kw,brand} = options
			if(brand) this.$store.dispatch('goodsList/getGoodsInfo',{kw,brand})
			else this.$store.dispatch('goodsList/getGoodsInfoByQuery',{kw})
			this.$store.dispatch('goodsList/getAllGoodsInfo',{
				page:this.page++,pageSize:this.pageSize,
			})
			this.$store.dispatch('goodsList/getAllGoodsLen')
		},
	}
</script>

<style lang="scss" scoped>
.goods-list{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width:100%;
	.goods-title{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		padding: 10rpx 20rpx;
		border-bottom: 4rpx solid #283C86;
		color: #c00000;
		font-size: 36rpx;
		font-weight: bold;
		text-align: center;
	}
	.goods-query{
		display: grid;
		grid-template-columns: repeat(auto-fill,50%);
		padding: 20rpx;
		padding-top: 0;
		width: inherit;
		.goods{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			height: 500rpx;
			padding: 10rpx;
			margin: 10rpx;
			border: 3rpx solid #FF7ED6;
			border-radius: 15rpx;
			
			.image{
				flex: 5;
				width: 100%;
				height: 100%;
			}
			.price{
				flex: 1;
				font-weight: bold;
				color: #c00000;
			}
			.abstract{
				// flex: 1.5;
				display: -webkit-box;
				font-size: 26rpx;
				color: #666666;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
	}
	.all-goods{
		display: grid;
		grid-template-columns: repeat(auto-fill,50%);
		padding: 20rpx;
		padding-top: 0;
		width: inherit;
		.goods{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			height: 500rpx;
			padding: 10rpx;
			margin: 10rpx;
			border: 3rpx solid #FF7ED6;
			border-radius: 15rpx;
			
			.image{
				flex: 5;
				width: 100%;
				height: 100%;
			}
			.price{
				flex: 1;
				font-weight: bold;
				color: #c00000;
			}
			.abstract{
				// flex: 1.5;
				display: -webkit-box;
				font-size: 26rpx;
				color: #666666;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
	}
}
</style>
