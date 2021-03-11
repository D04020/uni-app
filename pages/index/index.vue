<template>
	<view>
		<!-- 滚动tab栏组件 -->
		<!-- @tabtap父组件监听事件 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap='tabtap'></swiper-tab-head>
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
				<swiper-item class="swiper-item" v-for="(items,index) in newslist" :key="index">
					<!-- #ifndef APP-NVUE -->
					<scroll-view  scroll-y class="scroll-v list"   @scrolltolower="loadmore(index)"> <!-- scrlootolower触底事件 ；index是为了查明正在加载的是那个列表-->
							<template v-if="items.list.length>0">
								<!-- 图文组件-->
								<block v-for="(item,index1) in items.list" :key="index1">
									<index-list :item="item" :index="index1" ></index-list>
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
	//一 引入组件
	import indexList from "../../components/index/index-list.vue";
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import loadMore from "../../components/common/load-more.vue"
	import noThing from "../../components/common/no-thing.vue"
	
	export default {
		//二 注册组件
		components:{
			indexList,
			swiperTabHead,
			loadMore,
			noThing
		},
		data() {
			return {
				swiperheight:500,
				tabIndex:0,
				tabBars:[
					{name:'关注',id:'gz'},
					{name:'推荐',id:'tj'},
					{name:'体育',id:'ty'},
					{name:'热点',id:'rd'},
					{name:'财经',id:'cj'},
					{name:'娱乐',id:'yl'}
				],
				
				newslist:[
					{   
						loadtext:"上拉加载更多",
						list:[
							
							{
								userpic:'../../static/demo/userpic/19.jpg',//头像
								username:'程序猿',//昵称
								isattention:false,//关注
								title:'我是标题',//标题
								type:'img',// img 是图文，video是视频
								titlepic:'../../static/demo/datapic/45.jpg',//图片地址
								infonum:{
									index:0,//0代表没有进行操作；1顶；2踩
									dingnum:11,
									cainum:11
								},//顶(只能点一次)👎(只能点一次)
								commentnum:12,//评论
								sharenum:12//转发	
							},
							{
								userpic:'../../static/demo/demo6.jpg',//头像
								username:'程序猿',//昵称
								isattention:false,//关注
								title:'我是标题',//标题
								type:'video',// img 是图文，video是视频
								titlepic:'../../static/demo/datapic/36.jpg',//图片地址
								playnum:'20w',//视频播放次数
								long:'2:47',//播放时长
								infonum:{
									index:1,//0代表没有进行操作；1顶；2踩
									dingnum:11,
									cainum:11
								},//顶(只能点一次)👎(只能点一次)
								commentnum:12,//评论
								sharenum:12//转发	
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:'../../static/demo/userpic/19.jpg',//头像
								username:'程序猿',//昵称
								isattention:false,//关注
								title:'我是标题',//标题
								type:'img',// img 是图文，video是视频
								titlepic:'../../static/demo/datapic/45.jpg',//图片地址
								infonum:{
									index:0,//0代表没有进行操作；1顶；2踩
									dingnum:11,
									cainum:11
								},//顶(只能点一次)👎(只能点一次)
								commentnum:12,//评论
								sharenum:12//转发	
							},
							{
								userpic:'../../static/demo/demo6.jpg',//头像
								username:'程序猿',//昵称
								isattention:true,//关注
								title:'我是标题',//标题
								type:'video',// img 是图文，video是视频
								titlepic:'../../static/demo/datapic/36.jpg',//图片地址
								playnum:'20w',//视频播放次数
								long:'2:47',//播放时长
								infonum:{
									index:1,//0代表没有进行操作；1顶；2踩
									dingnum:11,
									cainum:11
								},//顶(只能点一次)👎(只能点一次)
								commentnum:12,//评论
								sharenum:12//转发	
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:'../../static/demo/userpic/19.jpg',//头像
								username:'程序猿',//昵称
								isattention:false,//关注
								title:'我是标题',//标题
								type:'img',// img 是图文，video是视频
								titlepic:'../../static/demo/datapic/45.jpg',//图片地址
								infonum:{
									index:0,//0代表没有进行操作；1顶；2踩
									dingnum:11,
									cainum:11
								},//顶(只能点一次)👎(只能点一次)
								commentnum:12,//评论
								sharenum:12//转发	
							},
							{
								userpic:'../../static/demo/demo6.jpg',//头像
								username:'',//昵称
								isattention:false,//关注
								title:'我是标题',//标题
								type:'video',// img 是图文，video是视频
								titlepic:'../../static/demo/datapic/36.jpg',//图片地址
								playnum:'20w',//视频播放次数
								long:'2:47',//播放时长
								infonum:{
									index:1,//0代表没有进行操作；1顶；2踩
									dingnum:11,
									cainum:11
								},//顶(只能点一次)👎(只能点一次)
								commentnum:12,//评论
								sharenum:12//转发	
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[]
					},
					{
						loadtext:"上拉加载更多",
						list:[]
					},
					{
						loadtext:"上拉加载更多",
						list:[]
					}	
				]
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
		//监听搜索框点击事件
		onNavigationBarSearchInputClicked() {
		    uni.navigateTo({
		    	url: '../search/search',
		    });
		},
		//监听原生标题导航按钮点击事件
		onNavigationBarButtonTap(e){
			// console.log(JSON.stringify(e))
			// e.index=1是导航按钮的铅笔
			switch(e.index){
				case 1:
				//打开发布页面
				uni.navigateTo({
					url:'../add-input/add-input'
				});
				break;
			}
		},
		methods: {
			//上拉加载事件
			loadmore(index){
				if(this.newslist[index].loadtext !='上拉加载更多'){return;}
					//1. 修改状态
					this.newslist[index].loadtext='加载中..';
					//2. 获取完成
					setTimeout(()=>{
						let obj=
						{
							userpic:'../../static/demo/demo6.jpg',//头像
							username:'程序猿',//昵称
							isattention:false,//关注
							title:'我是标题',//标题
							type:'video',// img 是图文，video是视频
							titlepic:'../../static/demo/datapic/36.jpg',//图片地址
							playnum:'20w',//视频播放次数
							long:'2:47',//播放时长
							infonum:{
								index:1,//0代表没有进行操作；1顶；2踩
								dingnum:11,
								cainum:11
							},//顶(只能点一次)👎(只能点一次)
							commentnum:12,//评论
							sharenum:12//转发	
						}
						this.newslist[index].list.push(obj);
						this.newslist[index].loadtext='上拉加载更多';
					},1000)
					
				
				// this.newslist[index].loadtext='没有更多数据了';
			},
			//tabbar点击事件
			tabtap(index){
				this.tabIndex = index;
			},
			//滑动事件
			tabChange(even){
				//监听当前所在的index
				this.tabIndex = even.detail.current
			}
		}
	}
</script>

<style>
	
</style>
