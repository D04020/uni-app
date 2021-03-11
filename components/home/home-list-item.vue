<template>
	<view class="home-list-item u-f-ac u-f-jsb"
	 hover-class="home-list-hover"
	 @tap="clickeven">
		<view class="u-f-ac">
			<view class="icon iconfont "
			v-if="item.icon"
			:class="['icon-'+item.icon]"></view>{{item.name}}
		</view>
		<view class="icon iconfont icon-jinru"></view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
		},
		methods:{
			//跳转类型
			clickeven(){
				switch (this.item.clicktype){
					case "navigateTo":
					if(this.item.url){
						uni.navigateTo({url: this.item.url});
					}
					break;
					case "switchTab":
					if(this.item.url){
						uni.switchTab({url: this.item.url})
					}
					break;
					case "clear":
					uni.showModal({
						title:"提示",
						content:"是否要清除缓存",
						confirmText:"立刻清除",
						success:res=>{
							uni.clearStorage();//清除缓存
						    uni.showToast({
						    	title:"清除缓存成功"
						    })
						}
					})
				}
			}
		}
	}
</script>

<style scoped>
	.home-list{
		padding: 20upx;
	}
	.home-list-item{
		padding: 20upx;
		border-top: 1upx solid #f4f4f4;
		border-bottom: 1upx solid #f4f4f4;
	}
	.home-list-item>view:first-child{
		color: #333333;
	}
	.home-list-item>view:first-child>view{
		margin-right: 10upx;
	}
	.home-list-item>view:last-child{
		color: #CCCCCC;
	}
	.home-list-hover{
		background: #f4f4f4;
	}
</style>
