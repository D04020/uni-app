<template>
	<view>
		<uni-collapse>
			<block v-for="(item,index) in list" :key="index">
				<uni-collapse-item :title="item.title" :show-animation="true" :contentdata="item.content">
				</uni-collapse-item>
			</block>
			
		</uni-collapse>
		<view class="body">
			<button class="user-set-btn"
			type="primary" @tap="submit">完成</button>
		</view>
		
		
	</view>
</template>

<script>
	import uniCollapse from '.../../components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '.../../components/uni-collapse-item/uni-collapse-item.vue'
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				list:[
					{
						title:"客服什么时候上线？",
						content:"1"
					},
					{
						title:"忘记账号/昵称/密码怎么办？",
						content:"2"
					},
					{
						title:"怎么搜索/查找/关注/取消用户？",
						content:"3"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import "../../common/form.css";
</style>
