<template>
	<view class="tag-sex icon iconfont"
	:class="[sex==0?'icon-nan':'icon-nv']">
	    {{age}}
	</view>
</template>

<script>
	export default {
		props:{
			sex:Number,
			age:Number
		}
	}
</script>

<style>
	.tag-sex{
		background: #007AFF;
		color: #ffffff;
		font-size: 23upx;
		padding: 5upx 10upx;
		margin-left: 10upx;
		border-radius: 20upx;
		line-height: 22upx;
	}
	.icon-nv{
		background:#ff698d!important ;
	}
</style>
