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
			@click="toDetail(s.id)"
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
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import request from '@/utils/request.js'
	export default {
		data() {
			return {
				navList:[]
			}
		},
		computed:{
			...mapState('home',['swipers'])
		},
		onLoad() {
			this.$store.dispatch('home/getSwiper')
			this.getNavList()
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
			toDetail(id){
				uni.navigateTo({
					url:`/subpackage/detail/index?goods_id=${id}`
				})
			},
			toPage(index){
				index?
				uni.switchTab({
					url:'/pages/user/index',
				}):
				uni.switchTab({
					url:'/pages/category/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.home{
	width: 100%;
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
}
</style>
