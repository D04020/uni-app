<template>
	<view class="index-list animated fadeInLeft">
		<view class="index-list1 u-f-ac u-f-jsb">
			<!-- 头像 -->
			<view class="u-f-ac">
				<image :src="item.userpic" mode="widthFix" lazy-load></image>
				{{item.username}}
			</view>
			<view class="u-f-ac" v-show='!isattention' @tap="guanzhu">
				<view class="icon iconfont icon-zengjia">关注</view>
			</view>
		</view>
		<view class="index-list2" @tap="opendetail">
			{{item.title}}
			
		</view>
		<view class="index-list3 u-f-ajc" @tap="opendetail">
			<!-- 图片 -->
			<image :src="item.titlepic" mode="widthFix" lazy-load></image>
			<!-- 视频 -->
			<template v-if="item.type==='video'">
				<view class="index-list-play icon iconfont icon-bofang"></view>
				<view class="index-list-playinfo">
					{{item.playnum}}次播放 {{item.long}}
				</view>
			</template>
		</view>
		<view class="index-list4 u-f-ac u-f-jsb">
			<!-- 顶和👎 -->
			<view class="u-f-ac">
				<view class="u-f-ac" :class="{'active':(infonum.index==1)}"
				@tap="caozuo('ding')">
					<view class="icon iconfont icon-icon_xiaolian-mian"></view>
					{{infonum.dingnum}}
				</view>
				<view class="u-f-ac"  :class="{'active':(infonum.index==2)}"
				@tap="caozuo('cai')">
					<view class="icon iconfont icon-kulian"></view>
					{{infonum.cainum}}
				</view>
			</view>
			<!-- 评论和分享 -->
			<view class="u-f-ac">
				<view class="u-f-ac">
					<view class="icon iconfont icon-pinglun1"></view>
					{{item.commentnum}}
				</view>
				<view class="u-f-ac">
					<view class="icon iconfont icon-zhuanfa"></view>
					{{item.sharenum}}
				</view>
			</view>
		</view>	
	</view>
</template>

<script>
	export default {
		//接收父组件传过来的值；值对应的类型
		props:{
			item:Object,
			index:Number
		},
		data(){
			return{
				isattention:this.item.isattention,
				infonum:this.item.infonum
			}
		},
		methods:{
			guanzhu(){
				this.isattention=true;
				uni.showToast({
				    title: '关注成功',
				});
			},
			//顶踩操作
			caozuo(type){
				// index:1,//0代表没有进行操作；1顶；2踩dingnum:11,cainum:11
				switch (type){
					case "ding":
					//如果点击时已经是1，代表已经操作过，返回原值
					if(this.infonum.index==1){return}
					this.infonum.dingnum++
					if(this.infonum.index==2){
						this.infonum.cainum--
					}
					this.infonum.index=1
						break;
					case "cai":
					//如果点击时已经是2，代表已经操作过，返回原值
					if(this.infonum.index==2){return}
					this.infonum.cainum++
					if(this.infonum.index==1){
						this.infonum.dingnum--
					}
					this.infonum.index=2
						break;
				}
			},
			//进入详情页
			opendetail(){
				uni.navigateTo({
					url:"../../pages/detail/detail?detailData="+JSON.stringify(this.item)
				})
			}
		}
	}
</script>

<style scoped>
.index-list{
	padding: 20upx;
	border-bottom: 1upx solid #EEEEEE;
}
.index-list1>view:first-child{
	color: #9f9f9f;
}
/* 头像 */
.index-list1>view:first-child image{
	width: 85upx;
	height: 85upx;
	border-radius: 100%;
	margin-right: 10upx;
}
/* 关注按钮 */
.index-list1>view:last-child{
	background: #f4f4f4;
	border-radius: 5upx;
	padding: 0 10upx;
}
.index-list1>view:last-child>view{
	border-radius: 5upx;
}
/* 标题 */
.index-list2{
	font-size: 32upx;
	padding-top: 15upx;
}
.index-list3{
	position: relative;
	padding-top: 15upx;
}
.index-list3 image{
	width: 100%;
	border-radius: 20upx;
}
.index-list4{
	padding: 15upx 0;
}
.index-list4 view{
	color: #999999;
}
.index-list4>view>view>view,.index-list4>view>view:first-child{
	margin-right: 10upx;
}
.index-list-play{
	position: absolute;
	font-size: 140upx;
	color: #FFFFFF;
}
.index-list-playinfo{
	position: absolute;
	background: rgba(51,51,51,0.72);
	color: #FFFFFF;
	bottom: 8upx;
	right: 8upx;
	border-radius: 40upx;
	font-size: 22upx;
	padding: 0 12upx;
}
.index-list4 .active,.index-list4 .active>view{
	color: #c5f61c;
}

</style>
