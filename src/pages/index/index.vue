<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper 
		class="swiper" 
		circular 
		:autoplay="true" 
		:interval="5000" 
		:duration="1000"
		>
			<swiper-item 
			class="swiper-item" 
			v-for="(s,i) of swipers" 
			:key="i"
			@click="toGoodsList"
			>
				<image class="swiper-item-image" :src="s.image" mode="aspectFit"/>
			</swiper-item>
		</swiper>
		<!-- 导航栏 -->
		<view class="nav">
			<view class="nav-item" v-for="(n,i) of navList" :key="n.id" @click="toPage(i)">
				<image :src="n.img_url" mode="heightFix"/>
				<text>{{n.title}}</text>
			</view>
		</view>
		<view class="hr"><text>每日必看区</text></view>
		<!-- 每日必看区 -->
		<view class="must-see">
			<view class="container">
				<uni-section class="section" type="line" v-for="f of floors" :key="f.id" @click.native="toGoodsList(f.kw)">
					<uni-card class="card" >
						<image slot="cover" :src="f.img" mode="widthFix"/>
						<text>{{f.desc}}</text>
					</uni-card>
				</uni-section>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import _ from 'lodash'
	import request from '@/utils/request.js'
	export default {
		data() {
			return {
				navList:[],//存放导航栏
				page:0,//存放页
				pageSize:7,//一次行返回的页数
			}
		},
		computed:{
			...mapState('home',['swipers','floors','floorsLen'])
		},
		onLoad() {
			this.$store.dispatch('home/getSwiper')
			this.$store.dispatch('home/getFloorInfo',{
				page:this.page++,pageSize:this.pageSize,
			})
			this.$store.dispatch('home/getFloorsLen')
			this.getNavList()
		},
		onPullDownRefresh(){
			const t = parseInt(this.floorsLen / this.pageSize)
			const r = parseInt(Math.random() * t)
			let i = r * this.pageSize
			this.$store.dispatch('home/getNewFloorInfo',{page:i,pageSize:this.pageSize})
		},
		onReachBottom(){
			this.debounce()
		},
		methods: {
			async getNavList(){
				try{
					const res = await request.get('/shop/api/navList')
					this.navList = res.data
				}catch(e){
					console.log(e)
				}
			},
			toPage(index){
				index?
				uni.switchTab({
					url:'/pages/user/index',
				}):
				uni.switchTab({
					url:'/pages/category/index'
				})
			},
			toGoodsList(keyword){
				typeof keyword === 'string' ? 
				uni.navigateTo({url:`/subpackage/goods_list/index?kw=${keyword}`}):
				uni.navigateTo({url:'/subpackage/goods_list/index'})
			},
			// 对上拉触底防抖处理
			debounce:_.debounce(function(){
				this.$store.dispatch('home/getFloorInfo',{page:this.page++,pageSize:this.pageSize})
			},100)
		}
	}
</script>

<style lang="scss" scoped>
.home{
	width: 100%;
	// 轮播图
	.swiper{
		width: inherit;
		height: 360rpx;
		.swiper-item{
			.swiper-item-image{
				width: 100%;
				height: 100%;
			}
		}
	}
	// 导航栏
	.nav{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20rpx;
		width: inherit;
		height: 120rpx;
		background-color: #f1f1f1;
		.nav-item{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			height: 80%;
			line-height: 80%;
			image{
				width:100%;
				height: 100%;
				transform: scale(50%);
			}
			text{
				font-size: 30rpx;
				color: #00aaff;
			}
		}
	}
	// 分割线
	.hr{
		width: 96%;
		height: 5rpx;
		position: relative;
		top: 30rpx;
		left: 50%;
		transform: translateX(-50%);
		background-color: #f1f1f1;
		text{
			position: absolute;
			left:50%;
			top: 50%;
			transform: translate(-50%,-50%);
			color:#c00000;
			font-size: 32rpx;
			font-weight: 600;
		}
	}
	// 每日必看区
	.must-see{
		width: 100%;
		margin-top: 80rpx;
		background-color: #fff;
		.container{
			padding: 10rpx;
			display: grid;
			grid-template-columns: repeat(auto-fill,50%);
			background-color: #f1f1f1;
			.section{
				
				.card{
					display: flex;
					flex-direction: column;
					align-items: center;
					width: inherit;
					padding: 40rpx 10rpx;
					image{
						width:100%;
						height: 100%;
						border-radius: 5rpx;
					}
					text{
						font-size: 26rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						padding-top: 20rpx;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
				}
			}
		}
	}
	
}
</style>
