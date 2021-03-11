<template>
	<view class="user-space-head u-f-ajc">
		<image :src="getBgImg" mode="widthFix" lazy-load @tap.stop="changeBjImage"></image>
		<view class="user-space-head-info u-f-ajc u-f-column">
			<image :src="userinfo.userpic" mode="widthFix" lazy-load></image>
			<view class="user-space-margin u-f-ac">
				{{userinfo.username}} <tag-sex-age :sex="userinfo.sex" :age="userinfo.age">
					
				</tag-sex-age>
			 </view>
			 <view class="user-space-margin user-space-head-btn icon iconfont  "
			 :class="[this.isguanzhu?'active':'icon-zengjia']" @tap="guanzhu">
			 	{{this.isguanzhu?'已关注':"关注"}}
			 </view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from '../common/tag-sex-age.vue';
	export default {
		components:{
			tagSexAge
		},
		props:{
			userinfo:Object
		},
		computed:{
			getBgImg(){
				return"../../static/bj/"+this.userinfo.bgimg+".jpg"
			}
		},
		data() {
			return {
				isguanzhu: this.userinfo.isguanzhu
			}
		},
		methods:{
			// 切换背景
			changeBjImage(){
				let no = parseInt(this.userinfo.bgimg)
				this.userinfo.bgimg = no<6 ? ++no : 1
			},
			//关注
			guanzhu(){
				this.isguanzhu=!this.isguanzhu
			}
		}
	}
</script>

<style scoped>
	.user-space-margin{
		margin: 15upx 0;
	}
	.user-space-head{
		position: relative;
		height: 500upx;
		overflow: hidden;
	}
	.user-space-head>image{
		width: 100%;
	}
	.user-space-head-info{
		position: absolute;
		top: 150upx;
	}
	.user-space-head-info>image{
		width: 150upx;
		height: 150upx;
		border-radius: 100%;
	}
	.user-space-head-info>view:first-of-type{
		color: #FFFFFF;
		font-size: 35upx;
		font-weight: bold;
		text-shadow: 2upx 2upx 10upx #333333;
	}
	.user-space-head-btn{
		background: #FFE933;
		color: #333333;
		border: 1upx solid #FFE933;
		padding:0 15upx;
		border-radius: 10upx;
		font-size: 28upx;
	}
	.active{
		background: none;
		color: #FFFFFF;
		border: 1upx solid #FFFFFF;
	}
</style>
