<template>
	<view class="container">
		<view class="search">
			<slot name="icon"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			search(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 120rpx;
	background-color: #283c86;
	.search{
		width: 90%;
		height: 90rpx;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		border-radius: 90rpx;
		background-color: #f1f1f1;
	}
}
</style>