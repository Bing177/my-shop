<template>
	<view class="category">
		<Search>
			<template #icon>
				<uni-icons class="icon" type="search" size="30" @click="toPage()"></uni-icons>
			</template>
		</Search>
		<view class="container">
			<!-- 左侧滚动区 -->
			<scroll-view class="left" scroll-y="true">
				<view 
				class="scroll-item" 
				v-for="(c,i) of category" 
				:class="activeIndex === i ? 'active':''" 
				@click="handleClick(i)"
				:key="c.id" 
				>
					<text>{{c.kw}}</text>
					<uni-icons 
					v-show="i === activeIndex" 
					class="icon-right" 
					type="right" 
					color="#fff" 
					size="12"
					></uni-icons>
				</view>
			</scroll-view>
			<!-- 右侧展示区 -->
			<scroll-view class="right" scroll-y="true">
				<view class="brend">/商品品牌/</view>
				<view class="content">
					<block v-if="activeIndex===idx" v-for="(val,idx) of category" :key="idx">
						<view class="item" v-for="(item,index) of val.child" :key="index">
							<image :src="item.logo" mode="aspectFit"/>
							<text>{{item.title}}</text>
						</view>
					</block>			
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Search from '@/components/search'
	import {mapState} from 'vuex'
	export default {
		data(){
			return {
				activeIndex:0,//scroll-item当前选中索引项
			}
		},
		components:{Search},
		computed:{
			...mapState(
				'category',
				[
					'category',
					'digtalElectronics',
					'beauty',
					'jordon',
					'lining',
					'anta',
					'pcbaby',
					'beddings',
					'outdoors',
					'philips',
					'toread',
					'casio',
					'kitchen',
					'jewelry'
				]
			)
		
		},
		methods:{
			toPage(){
				uni.navigateTo({
					url:'/subpackage/search/index'
				})
			},
			handleClick(index){
				this.activeIndex = index
			}
		},
		mounted() {
			this.$store.dispatch('category/getCategory')
			this.$store.dispatch('category/getProductInfo','digtalElectronics')
			this.$store.dispatch('category/getProductInfo','beauty')
			this.$store.dispatch('category/getProductInfo','jordon')
			this.$store.dispatch('category/getProductInfo','lining')
			this.$store.dispatch('category/getProductInfo','anta')
			this.$store.dispatch('category/getProductInfo','pcbaby')
			this.$store.dispatch('category/getProductInfo','beddings')
			this.$store.dispatch('category/getProductInfo','outdoors')
			this.$store.dispatch('category/getProductInfo','philips')
			this.$store.dispatch('category/getProductInfo','toread')
			this.$store.dispatch('category/getProductInfo','casio')
			this.$store.dispatch('category/getProductInfo','kitchen')
			this.$store.dispatch('category/getProductInfo','jewelry')
		}
	}
</script>

<style lang="scss" scoped>
.active{
	color: #fff;
	background-color: #283c86;
	border-radius: 5rpx;
}
.category{
	.icon{
		position: absolute;
		left: 50%;
		top:50%;
		transform: translate(-50%,-50%);
	}
	.container{
		display: flex;
		justify-content: space-between;
		width: 100%;
		.left{
			flex: 1.5;
			background-color: #f1f1f1;
			height: 91vh;
			border-right: 4rpx solid #ccc;
			.scroll-item{
				display: flex;
				justify-content:start;
				align-items: center;
				width: inherit;
				height: 100rpx;
				text-align: center;
				font-size: 28rpx;
				font-weight: 600;
				border-top: 5rpx solid #fff;
				text{
					flex:3;
				}
				.icon-right{
					flex:1;
				}
			}
		}
		.right{
			flex: 3;
			.brend{
				width:100%;
				height: 100rpx;
				font-size: 30rpx;
				font-weight: 600;
				text-align: center;
				line-height: 100rpx;
				border-bottom: 2rpx dotted #cfcfcf;
				color: #c00000;
			}
			.content{
				display: grid;
				grid-template-columns: repeat(auto-fill,50%);
				.item{
					display:flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding:10rpx;
					height:200rpx;
					border:2rpx solid #f1f1f1;
					image{
						width:100%;
						height:100%;
						transform: scale(60%);
					}
					text{
						font-size: 28rpx;
						font-weight: bold;
						color:#555;
					}
				}
			}
		}
	}
}
</style>