<template>
	<view class="body">
		<swiper-tab-head
		:tabBars="tabBars" 
		:tabIndex="tabIndex"
		 @tabtap='tabtap'
		 scrollItemStyle="width:33%;"
		 scrollStyle="border-botton:0;">
		 </swiper-tab-head>
		 <!-- 好友列表 -->
		 <block v-for="(item,index) in list" :key="index">
			 <user-list :item="item" :index="index"></user-list>
		 </block>
		 
		 <view class="uni-tab-bar">
		 	<!-- current 滑块所在的index -->
		 	<!-- @change监听事件 -->
		 	<swiper class="swiper-box"
		 	  style="flex: 1;"
		 	  :duration="300"
		 	 :style="{height:swiperheight+'px'}"
		 	  :current="tabIndex"
		 	  @change='tabChange'>
		 		<swiper-item class="swiper-item" v-for="(items,index) in newslist" :key="index">
		 			<!-- #ifndef APP-NVUE -->
		 			<scroll-view  scroll-y class="scroll-v list"   @scrolltolower="loadmore(index)"> <!-- scrlootolower触底事件 ；index是为了查明正在加载的是那个列表-->
		 					<template v-if="items.list.length>0">
		 						<!-- 图文组件-->
		 						<block v-for="(item,index1) in items.list" :key="index1">
		 							<user-list :item="item" :index="index1"></user-list>
		 						</block>	
		 						<!-- 图文组件 -->
		 						
		 						<!-- 上拉加载组件 -->
		 						<load-more :loadtext="items.loadtext"></load-more>
		 						<!-- 上拉加载组件 -->
		 					</template>
		 					
		 			
		 			        <template v-else>
		 						<!-- 无内容页面 -->
		 						<no-thing></no-thing>
		 						<!-- 无内容页面 -->
		 			        </template>
		 			</scroll-view>
		 			<!-- #endif -->
		 		</swiper-item>
		 	</swiper>
		 </view>
	</view>
</template>

<script>
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import userList from '../../components/user-list/user-list.vue';
	import loadMore from "../../components/common/load-more.vue";
	import noThing from "../../components/common/no-thing.vue"
	export default {
		components:{
			swiperTabHead,
			userList,
			loadMore,
			noThing
		},
		data() {
			return {
				swiperheight:500,
				tabIndex:0,
				tabBars:[
					{name:'互关',id:'hg',num:10},
					{name:'关注',id:'gz',num:20},
					{name:'粉丝',id:'fs',num:30}
				],
				newslist:[
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:'../../static/demo/userpic/10.jpg',
								username:'昵称',
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:'../../static/demo/userpic/17.jpg',
								username:'昵称',
								age:22,
								sex:1,
								isguanzhu:false
							},
							{
								userpic:'../../static/demo/userpic/10.jpg',
								username:'昵称',
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:'../../static/demo/userpic/17.jpg',
								username:'昵称',
								age:22,
								sex:1,
								isguanzhu:false
							},
							{
								userpic:'../../static/demo/userpic/10.jpg',
								username:'昵称',
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:'../../static/demo/userpic/17.jpg',
								username:'昵称',
								age:22,
								sex:1,
								isguanzhu:false
							},
							{
								userpic:'../../static/demo/userpic/10.jpg',
								username:'昵称',
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:'../../static/demo/userpic/17.jpg',
								username:'昵称',
								age:22,
								sex:1,
								isguanzhu:false
							}
						]
					},
					{
						loadtext:"加载更多",
						list:[
							{
								userpic:'../../static/demo/userpic/10.jpg',
								username:'昵称',
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:'../../static/demo/userpic/17.jpg',
								username:'昵称',
								age:22,
								sex:1,
								isguanzhu:false
							}
						]
					},
					{
						loadtext:"加载更多",
						list:[
							
						]
					}
				],
				list:[
					
				]
				
			}
		},
		//监听导航按钮事件
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				uni.navigateBack({
					delta: 1
				});
			}
		},
		methods: {
			tabtap(index){
				this.tabIndex = index;
			},
			//滑动事件
			tabChange(even){
				//监听当前所在的index
				this.tabIndex = even.detail.current
			},
			loadmore(index){
				if(this.newslist[index].loadtext !='上拉加载更多'){return;}
					//1. 修改状态
					this.newslist[index].loadtext='加载中..';
					//2. 获取完成
					setTimeout(()=>{
						let obj={
								userpic:'../../static/demo/userpic/17.jpg',
								username:'昵称',
								age:22,
								sex:1,
								isguanzhu:false
							}
						
						this.newslist[index].list.push(obj);
						this.newslist[index].loadtext='上拉加载更多';
					},1000)
					
				
				// this.newslist[index].loadtext='没有更多数据了';
			},
		},
		onLoad() {
			uni.getSystemInfo({
			    success:(res)=> {
					//获取屏幕高度减去滚动tab栏高度
					let height = res.windowHeight-uni.upx2px(100)
			        console.log(height);//窗口高度
					//赋值
					this.swiperheight = height
					
			    }
			});
		},
	}
</script>

<style>
	
</style>
