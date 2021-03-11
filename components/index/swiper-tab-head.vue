<template>
	<!-- 滚动tab导航  -->
	<view class="uni-tab-bar">
		<scroll-view scroll-x class="uni-swiper-tab" :style="scrollStyle" >
			<block v-for="(tab,index) in tabBars" :key="tab.id">
				<view class="swiper-tab-list" :class="{'active':tabIndex==index}"
				 @tap="tabtap(index)"
				 :style="scrollItemStyle">
					<!-- @tab='tabtap(index)' 添加滚动tab导航点击字体变换颜色事件 -->
					{{tab.name}} {{tab.num?tab.num:''}}
					<view class="swiper-tab-line"></view>
				</view>
			</block>
		</scroll-view>
	</view>
	<!-- 滚动tab导航 -->
</template>

<script>
	export default{
		props:{
			tabBars:Array,
			tabIndex:Number,
			scrollStyle:{
				type:String,
				default:""
			},
			scrollItemStyle:{
				type:String,
				default:""
			}
			
		},
		methods:{
			//点击事件
			tabtap(index){
			this.$emit('tabtap',index)
			}
		}
	}
</script>

<style>
	.uni-swiper-tab{
		border-bottom: 1upx solid #eeeeee;
	}
	.swiper-tab-list{
		color: #969696;
		font-weight: bold;
	}
	.uni-tab-bar .active{
		color: #343434;
	}
	/* 滚动tab导航文字下的小黄线 */
	.active .swiper-tab-line{
		border-bottom: 6upx solid #fede33;
	    width: 70upx;
		margin: auto;
		border-top: 6upx solid #fede33;
		border-radius: 20upx;
	}
	
</style>
