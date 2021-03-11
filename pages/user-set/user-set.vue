<template>
	<view class="body">
		<block v-for="(item,index) in list" :key="index">
			<home-list-item :item="item" index="index"></home-list-item>
		</block>
		<button type="primary" class="user-set-btn u-f-ajc" >退出登录
		</button>
	</view>
</template>

<script>
	import homeListItem from '../../components/home/home-list-item.vue';
	export default {
		components:{
			homeListItem
		},
		data() {
			return {
				list:[
					{name:"账号于安全",icon:"",clicktype:"navigateTo",url:"/pages/user-set-repassword/user-set-repassword"},
					{name:"绑定邮箱",icon:"",clicktype:"navigateTo",url:"/pages/user-set-email/user-set-email"},
					{name:"资料编辑",icon:"",clicktype:"navigateTo",url:"/pages/user-set-userinfo/user-set-userinfo"},
					{name:"小纸条",icon:"",clicktype:"",url:""},
					{name:"清除缓存",icon:"",clicktype:"clear",url:""},
					{name:"意见反馈",icon:"",clicktype:"navigateTo",url:"/pages/user-set-help/user-set-help"},
					{name:"关于糗百",icon:"",clicktype:"navigateTo",url:"/pages/user-set-about/user-set-about"}
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	@import "../../common/form.css";


</style>
