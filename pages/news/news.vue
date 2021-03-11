<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar :statusBar="true" @clickRight="openAdd"></uni-nav-bar>
		<!-- 列表 -->
		<view class="common-list u-f">
			<view class="common-list-l">
				<image src="../../static/demo/userpic/11.jpg" mode="widthFix" lazy-load></image>
			</view>
			<view class="common-list-r">
				<view class="u-f-ac u-f-jsb">
					<view>昵称<view class="icon iconfont icon-nan">25</view></view>
					<view class="icon iconfont icon-zengjia">关注</view>
				</view>
				<view> 我是标题</view>
				<view>
					<image src="../../static/demo/datapic/42.jpg" mode="widthFix" lazy-load></image>
				</view>
				<view class="u-f-ac u-f-jsb">
					<view>深圳 龙岗</view>
					<view class="u-f-ac ">
						<view class="icon oconfont zhuanfa">10</view>
						<view class="icon iconfont icon-pinglun1">20</view>
						<view class="icon iconfont icon-dianzan1">30</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
