<template>
	<view>
		<!-- 模糊背景 -->
		<topic-info :item="topicInfo"></topic-info>
		<!-- tab切换 -->
		<swiper-tab-head 
		:tabBars="tabBars" 
		:tabIndex="tabIndex"
		 @tabtap='tabtap'
		 scrollItemStyle="width:50%;"
		 scrollStyle="border-bottom: 0;">
		 </swiper-tab-head>
		 <!-- 列表 -->
		 <view class="topic-detail-list">
		 	<block v-for="(item,index) in tabList" :key="index">
				<template v-if="tabIndex==index">
					<!-- 列表 -->
					<block v-for="(list,listindex) in item.list" :key="listindex">
						<common-list :item="list" :index="listindex"></common-list>
					</block>
					<!-- 上拉加载 -->
					<load-more :loadtext="item.loadtext"></load-more>
				</template>
			</block>
		 </view>
	
	</view>
</template>

<script>
	import topicInfo from '../../components/topic/topic-info.vue';
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import commonList from '../../components/common/common-list.vue';
	import loadMore from "../../components/common/load-more.vue"
	export default {
		components: {
			topicInfo,
			swiperTabHead,
			commonList,
			loadMore
		},
		data() {
			return {
				topicInfo:{
					titlepic:"../../static/demo/topicpic/13.jpeg",
					title:"忆往事，敬余生",
					desc: "我是描述",
					totalnum:1000,
					dodaynum:1000
				},
				tabIndex:0,
				tabBars:[
					{name:'默认',id:'mr'},
					{name:'最新',id:'zx'}
				],
				tabList:[
					{
						loadtext:"上拉加载更多",
						list:[
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
					{
						loadtext:"上拉加载更多",
						list:[
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
					}
				]
			}
		},
		//监听页面触底事件
		onReachBottom(){
			this.loadmore();
		},
		//监听下拉刷新
		onPullDownRefresh() {
			this.getdata()
		},
		methods: {
			//下拉刷新
			getdata(){
				//获取数据
				
				//关闭下拉刷新
				setTimeout(()=> {
					let arr=[
						{
							userpic:"../../static/demo/userpic/5.jpg",
							username:"千古",
							sex:0, //0男，1女
							age:25,
							isguanzhu:false,
							title:"愿人随春好，春与人宜",
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
							username:"未来可期",
							sex:0, //0男，1女
							age:25,
							isguanzhu:false,
							title:"整挺好",
							titlepic:"../../static/demo/datapic/4.jpg",
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
							title:" 楼下一个男人病得要死，那间隔壁的一家唱着留声机，对面是弄孩子。楼上有两人狂笑，还有打牌声。河中的船上有女人哭着她死去的母亲。人类的悲欢并不相通，我只觉得他们吵闹",
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
					];
					//赋值
					this.tabList[this.tabIndex].list=arr
					uni.stopPullDownRefresh()
				}, 2000);
			},
			//tabbar点击事件
			tabtap(index){
				this.tabIndex = index;
			},
			//上拉加载
			loadmore(){
				if(this.tabList[this.tabIndex].loadtext!='上拉加载更多'){return;}
					//1. 修改状态
					this.tabList[this.tabIndex].loadtext='加载中..';
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
						this.tabList[this.tabIndex].list.push(obj);
						this.tabList[this.tabIndex].loadtext='上拉加载更多';
					},1000)
					
				
				// this.tabList[this.tabIndex].loadtext='没有更多数据了';
			},
		}
	}
</script>

<style>
	
</style>
