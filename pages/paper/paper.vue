<template>
	<view class="body">
		<!-- 操作菜单 -->
		<paper-left-popup
		:show="show"
		@hide="hidepopup"
		@addfriend="addfriend"
		@clear="clear"></paper-left-popup>
		<!-- 小纸条列表 -->
		<block v-for="(item,index) in list" :key="index">
			<paper-list :item="item" :index="index"></paper-list>
		</block>
		<!-- 上拉加载 -->
		<loadMore :loadtext="loadtext"></loadMore>
	</view>
</template>
<script>
	import paperList from '@/components/paper/paper-list.vue';
	import paperLeftPopup from '@/components/paper/paper-left-popup.vue';
	import loadMore from "../../components/common/load-more.vue"
	export default {
		components:{
			paperList,
			loadMore,
			paperLeftPopup
		},
		data() {
			return {
				show:false,
				loadtext:"上拉加载更多",
				list:[
					{
						userpic:"../../static/demo/userpic/17.jpg",
						username:"大头儿子",
						time:"10：21",
						data:"我是信息",
						noreadnum:2
					},
					{
						userpic:"../../static/demo/userpic/13.jpg",
						username:"Moix",
						time:"10：21",
						data:"我是信息",
						noreadnum:0
					},
					{
						userpic:"../../static/demo/userpic/14.jpg",
						username:"随风",
						time:"10：21",
						data:"我是信息",
						noreadnum:0
					},
					{
						userpic:"../../static/demo/userpic/15.jpg",
						username:"千古",
						time:"10：21",
						data:"我是信息",
						noreadnum:11
					},
					{
						userpic:"../../static/demo/userpic/17.jpg",
						username:"大头儿子",
						time:"10：21",
						data:"我是信息",
						noreadnum:2
					},
					{
						userpic:"../../static/demo/userpic/13.jpg",
						username:"Moix",
						time:"10：21",
						data:"我是信息",
						noreadnum:0
					},
					{
						userpic:"../../static/demo/userpic/14.jpg",
						username:"随风",
						time:"10：21",
						data:"我是信息",
						noreadnum:0
					},
					{
						userpic:"../../static/demo/userpic/15.jpg",
						username:"千古",
						time:"10：21",
						data:"我是信息",
						noreadnum:11
					}
				]
			}
		},
		//监听下拉刷新
		onPullDownRefresh() {
			this.getdata()
		},
		//页面上拉触底事件
		onReachBottom(){
			this.loadmore()
		},
		//监听导航按钮点击事件
		onNavigationBarButtonTap(e){
			switch (e.index){
				case 0:
				uni.navigateTo({
					url:'../user-list/user-list'
				});
				this.hidepopup()
					break;
				case 1:
				this.showpopup()
					break;
			}
		},
		methods: {
			//操作菜单
			addfriend(){
				this.hidepopup()
			},
			clear(){
				this.hidepopup()
			},
			hidepopup(){
				this.show=false
			},
			showpopup(){
				this.show=true
			},
			//上拉加载
			loadmore(){
				if(this.loadtext!='上拉加载更多'){return;}
					//1. 修改状态
					this.loadtext='加载中..';
					//2. 获取完成
					setTimeout(()=>{
						let obj=
						{
							userpic:"../../static/demo/userpic/15.jpg",
							username:"千古",
							time:"10：21",
							data:"我是信息",
							noreadnum:11
						}
						
						this.list.push(obj);
						this.loadtext='上拉加载更多';
					},1000)
					
				
				// this.loadtext='没有更多数据了';
			},
			//获取数据
			getdata(){
				setTimeout(()=> {
					//获取服务器数据
					let arr=[
						
							{
								userpic:"../../static/demo/userpic/14.jpg",
								username:"大头儿子",
								time:"1:55",
								data:"我是信息",
								noreadnum:22
							},
							{
								userpic:"../../static/demo/userpic/19.jpg",
								username:"Moix",
								time:"10:01",
								data:"我是信息",
								noreadnum:0
							},
							{
								userpic:"../../static/demo/userpic/20.jpg",
								username:"随风",
								time:"10:21",
								data:"我是信息",
								noreadnum:0
							},
							{
								userpic:"../../static/demo/userpic/10.jpg",
								username:"千古",
								time:"10:00",
								data:"我是信息",
								noreadnum:11
							}
					];
					//赋值
					this.list=arr
					//关闭刷新
					uni.stopPullDownRefresh();
				},2000);
			}
		}
	}
</script>

<style scoped>
	.body{
		padding: 0 20upx;
	}
	
</style>