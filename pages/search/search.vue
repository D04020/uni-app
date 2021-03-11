<template>
	<view>
		<template v-if="list.length>0">
			<block v-for="item in list" :key="item.index">
				<index-list :item="item" :index="index"></index-list>
			</block>
			<load-more :loadtext="loadtext"></load-more>
		</template>
		<template v-else-if="issearch && list.length<1">
			<!-- 无内容页面 -->
			<no-thing></no-thing>
			<!-- 无内容页面 -->
		</template>
		
		
	</view>
</template>

<script>
	import indexList from '../../components/index/index-list.vue';
	import noThing from "../../components/common/no-thing.vue"
	import loadMore from "../../components/common/load-more.vue"
	export default {
		components:{
			indexList,
			noThing,
			loadMore
		},
		data() {
			return {
				issearch:false,
				loadtext:"上拉加载更多",
				list:[],
				searchtext:''
			}
		},
		//监听原生标题导航按钮点击事件(取消按钮)
		onNavigationBarButtonTap(e){
			// console.log(JSON.stringify(e))
			if(e.index==0){
				// 关闭当前页面，返回上一页面或多级页面
				uni.navigateBack({
					delta:1
				})
			}
			
		},
		//监听搜索框文本变化
		onNavigationBarSearchInputChanged(e){
			this.searchtext = e.text
		},
		//监听点击搜索按钮事件
		onNavigationBarSearchInputConfirmed(e){
			if(e.text){
				this.getdata(e.text)
			}
		},
		//监听页面触底事件
		onReachBottom(){
			this.loadmore()
		},
		//监听下拉刷新
		onPullDownRefresh(){
			this.getdata();
			uni.stopPullDownRefresh()
		},
		methods: {
			//上拉加载事件
						loadmore(){
							if(this.loadtext !='上拉加载更多'){return;}
								//1. 修改状态
								this.loadtext='加载中..';
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
									this.list.push(obj);
									this.loadtext='上拉加载更多';
								},1000)
							// this.loadtext='没有更多数据了';
						},
		    //搜索事件
			getdata(){
				this.searchtext
				uni.showLoading()
				//请求服务器 post keyword:this.searchtext
				setTimeout(()=>{
					let arr =[
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
					];
					this.list=arr;
					uni.hideLoading();
					this.issearch=true;
				}, 10000);
				
				
				
			}
		}
	}
</script>

<style>


</style>
