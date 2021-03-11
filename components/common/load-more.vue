<template>
	<!-- 上拉加载 -->
	<view class="load-more">
		{{loadtext}}
	</view>
	<!-- 上拉加载 -->
</template>

<script>
	export default {
		props:{
			loadtext:String
		}
	}
</script>

<style scoped>
	.load-more{
		text-align: center;
		color: #aaaaaa;
		padding: 15upx;
	}
</style>
