<template>
	<view>
		<!-- 背景图 + 用户基本信息 -->
		<user-space-head :userinfo="userinfo"></user-space-head>
		<!-- 统计 -->
		<view class="user-space-data">
			<home-data :homedata="spacedata"></home-data>
		</view>
		<view style="height: 20upx; background: #F4F4F4;"></view>
		<!-- tab导航 -->
		<swiper-tab-head
		:tabBars="tabBars" 
		:tabIndex="tabIndex"
		 @tabtap='tabtap'
		 scrollItemStyle="width:33.33%;"
		 scrollStyle="border-botton:10upx;">
		 </swiper-tab-head>
		 
		 <!-- 主页 -->
		 
		 <block v-for="(item,index) in tabList" :key="index">
			 <template v-if="tabIndex==0">
				 <user-space-userinfo :userinfo="userinfo"></user-space-userinfo>
			 </template>
		 	<template v-else-if="tabIndex==index">
		 		<!-- 列表 -->
		 		<block v-for="(list,listindex) in item.list" :key="listindex">
		 			<common-list :item="list" :index="listindex"></common-list>
		 		</block>
		 		<!-- 上拉加载 -->
		 		<load-more :loadtext="item.loadtext"></load-more>
		 	</template>
		 </block>
		 
		 <!-- 操作菜单 -->
	    <!-- 操作菜单 -->
	    <user-space-popup :show="show" 
	    @hide="togleShow"
	    @lahei="lahei"
	    @beizhu="beizhu"></user-space-popup>
	    
	</view>
</template>

<script>
	import userSpaceHead from '../../components/user-space/user-space-head.vue';
	import homeData from '../../components/home/home-data.vue';
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
    import userSpaceUserinfo from '../../components/user-space/user-space-userinfo.vue';
	import commonList from '../../components/common/common-list.vue';
	import loadMore from "../../components/common/load-more.vue"
	import userSpacePopup from '../../components/user-space/user-space-popup.vue';
	export default {
		components:{
			userSpaceHead,
			homeData,
			swiperTabHead,
			userSpaceUserinfo,
			commonList,
			loadMore,
			userSpacePopup
		},
		data() {
			return {
				show:false,
				userinfo:{
					bgimg:1,
					userpic:"../../static/demo/userpic/101.jpeg",
					username:"",
					sex:1,
					age:20,
					isguanzhu:false,
					regtime:'2019-04-10',
					id:72394234,
					birthday:"2000-07-07",
					job:"IT",
					path:"山西运城",
					qg:"已婚"
					
				},
				spacedata:[
					{name:"获赞",num:'10k'},
					{name:"关注",num:11},
					{name:"粉丝",num:12},
				],
				tabIndex:0,
				tabBars:[
					{name:'主页',id:'zy'},
					{name:'糗事',id:'qs'},
					{name:'动态',id:'dt'}
				],
				tabList:[
					{},
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
		onReachBottom(){
			this.loadmore();
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){ this.togleShow(); }
		},
		methods: {
			// 操作菜单显示隐藏
			togleShow(){
				this.show=!this.show;
			},
			// 拉黑
			lahei(){
				console.log("拉黑")
				this.togleShow();
			},
			// 备注
			beizhu(){
				console.log("备注")
				this.togleShow()
			},
			//tabbar点击事件
			tabtap(index){
				this.tabIndex = index;
			},
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
	
	.user-space-data{
		background: #FFFFFF;
		position: relative;
		z-index: 100;
		border-top-right-radius:20upx;
		border-top-left-radius:20upx;
		margin-top: -15upx;
	}


</style>
