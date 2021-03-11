<template>
	<view>
		<!-- 自定义导航栏 -->
		<active-nav-bar :tabBars="tabBars"
		 :tabIndex="tabIndex"
		  @change-tab="changeTab">
		 </active-nav-bar>
		<!-- 滚动tab栏组件 -->
		<view class="uni-tab-bar">
			<!-- current 滑块所在的index -->
			<!-- @change监听事件 -->
			<swiper class="swiper-box"
			  style="flex: 1;"
			  :duration="300"
			 :style="{height:swiperheight+'px'}"
			  :current="tabIndex"
			  @change='tabChange'>
			  <!-- 关注 -->
				<swiper-item >
					<!-- #ifndef APP-NVUE -->
					<scroll-view  scroll-y class="scroll-v list"   @scrolltolower="loadmore()"> <!-- scrlootolower触底事件 ；index是为了查明正在加载的是那个列表-->
						<!-- 列表 -->		
						<block v-for="(item,index) in guanzhu.list" :key="index">
							<common-list :item="item" :index="index"></common-list>
						</block>
						<!-- 上拉加载 -->
						<load-more :loadtext="guanzhu.loadtext"></load-more>		
					</scroll-view>
					<!-- #endif -->
				</swiper-item>
				<!-- 话题 -->
				<swiper-item >
					<!-- #ifndef APP-NVUE -->
					<scroll-view  scroll-y class="scroll-v list"   @scrolltolower="loadmore()"> <!-- scrlootolower触底事件 ；index是为了查明正在加载的是那个列表-->
						<!-- 搜索框 -->
						<view class="search-input">
							<input placeholder-class="icon iconfont icon-sousuo topic-search" placeholder="搜索内容" class="uni-input" />
						</view>
						<!-- 轮播图 -->
						<swiper  class="topic-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
							<block v-for="(item,index) in topic.swiper" :key="index">
								<swiper-item>
									<image  :src="item.src" mode="widthFix" lazy-load></image>
								</swiper-item>
							</block>
						</swiper>
						<!-- 热门分类 -->
						<topic-nav :nav="topic.nav"></topic-nav>
						<!-- 最近更新 -->
						<view class="topic-new">
							<view>最近更新</view>
							<block v-for="(item,index) in topic.list"  :key="index">
								<topic-list :item="item" ></topic-list>
							</block>	
						</view>
					</scroll-view>
					<!-- #endif -->
				</swiper-item>
			</swiper>
		</view>
		
		
	</view>
</template>

<script>
	import activeNavBar from '../../components/active/active-nav-bar.vue'
	import commonList from '../../components/common/common-list.vue'
	import loadMore from "../../components/common/load-more.vue"
	import topicNav from '../../components/active/topic-nav.vue'
	import topicList from '../../components/active/topic-list.vue'
	export default {
		components: {
			commonList,
			activeNavBar,
			loadMore,
			topicNav,
			topicList
		},
		data() {
			return {
				tabIndex:0,
				swiperheight:500,
				tabBars:[
					{name:"关注",id:"guanzhu"},
					{name:"话题",id:"huati"}
				],
				guanzhu:{
					loadtext:"上拉加载更多",
					list:[
						//文字列表
						{  
							userpic:"../../static/demo/userpic/8.jpg",
							username:"尊古",
							sex:0, //0男，1女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titlepic:"",
							video:false,
							share:false,
							path:"深圳 龙岗",
							sharenum:20,
							//评论数
							commentnum:30,
							//点赞数
							goodnum:20,	
						},
						//图文列表
						{
							userpic:"../../static/demo/userpic/14.jpg",
							username:"三鱼先生",
							sex:0, //0男，1女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titlepic:"../../static/demo/datapic/43.jpg",
							video:false,
							share:false,
							path:"深圳 龙岗",
							sharenum:20,
							//评论数
							commentnum:30,
							//点赞数
							goodnum:20,
						},
						//视频
						{
							userpic:"../../static/demo/userpic/6.jpg",
							username:"寻风",
							sex:1, //0男，1女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titlepic:"../../static/demo/datapic/41.jpg",
							video:{
								looknum:"20w",
								long:"2:47"
							},
							share:false,
							path:"深圳 龙岗",
							sharenum:20,
							//评论数
							commentnum:30,
							//点赞数
							goodnum:20,
						},
						{
							userpic:"../../static/demo/userpic/5.jpg",
							username:"十三月的人",
							sex:1, //0男，1女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titlepic:"",
							video:false,
							share:{
								title:"我是分享的标题",
								titlepic:"../../static/demo/datapic/44.jpg"	
							},
							path:"深圳 龙岗",
							sharenum:20,
							//评论数
							commentnum:30,
							//点赞数
							goodnum:20,
						}
						
					]
				},
				topic:{
					swiper:[
						{src:"../../static/demo/datapic/44.jpg"},
						{src:"../../static/demo/datapic/43.jpg"},
						{src:"../../static/demo/datapic/46.jpg"}
					],
					nav:[
						{name:"最新"},
						{name:"游戏"},
						{name:"打卡"},
						{name:"情感"},
						{name:"故事"},
						{name:"喜爱"}
					],
					list:[
						{
							titlepic:"../../static/demo/topicpic/13.jpeg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10
						},
						{
							titlepic:"../../static/demo/topicpic/14.jpeg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10
						},
						{
							titlepic:"../../static/demo/topicpic/15.jpeg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10
						}
					]
				},
			}
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
		
		methods:{
			changeTab(index){
				this.tabIndex = index
			},
			openAdd(){
				//打开发布页面
				uni.navigateTo({
					url:'../add-input/add-input'
				});
			},
			//tabbar点击事件
			tabtap(index){
				this.tabIndex = index;
			},
			//滑动事件
			tabChange(even){
				//监听当前所在的index
				this.tabIndex = even.detail.current
			},
			loadmore(){
				if(this.guanzhu.loadtext !='上拉加载更多'){return;}
					//1. 修改状态
					this.guanzhu.loadtext='加载中..';
					//2. 获取完成
					setTimeout(()=>{
						let obj=
						{
							userpic:"../../static/demo/userpic/14.jpg",
							username:"三鱼先生",
							sex:0, //0男，1女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titlepic:"../../static/demo/datapic/43.jpg",
							video:false,
							share:false,
							path:"深圳 龙岗",
							sharenum:20,
							//评论数
							commentnum:30,
							//点赞数
							goodnum:20,
						}
						this.guanzhu.list.push(obj);
						this.guanzhu.loadtext='上拉加载更多';
					},1000)
					
				
				// this.guanzhu.loadtext='没有更多数据了';
			},
		},
		
	}
</script>

<style>
		.search-input{
			padding: 20upx;
		}
		.search-input>input{
			background: #f4f4f4;
			border-radius: 10upx;
		}
		.topic-search{
			display: flex;
			/* 水平居中 */
			justify-content: center;
			font-size: 27upx;
		}
		.topic-swiper{
			padding:0 20upx 20upx 20upx;
			border-radius: 10upx;
		}
		.topic-swiper image{
			width: 100%;
			border-radius: 10upx;
		}
		.topic-new{
			padding: 20upx;
		}
		.topic-new>view:first-child{
			padding-bottom: 5upx;
			font-size: 32upx;
		}
		


</style>
        