//网络监听
const NetWork={
	isConnect:false,
	On(){
		//获取当前网络状态
		uni.getNetworkType({
		    success: (res)=> {
		        if(res.networkType!=='none'){this.isConnect=true;return}
				uni.showToast({
					icon:"none",
					title:"请先连接网络"
				})
		    }
		});
		// 监听网络状态变化
		uni.onNetworkStatusChange((res)=>{
			this.isConnect = res.isConnected
			if(!res.isConnected){
				uni.showToast({
					icon:"none",
					title:"您目前处于断网状态"
				})
			}
		})
		
	}
}

// 全局方法
// 第一种：
//const webUrl = 'http://www.xxx.com/api/v1'
// 第二种
const ceshi = function(data){
	console.log('测试2：'+data)
}

// 第三种
const Chat = {
	// 是否链接上
	isopen:false,
	// 接收信息
	get(){
		// 调用当前对象里的属性
		console.log(this.isopen)
		// 调用当前对象里的方法
		this.ceshi();
		// 调用当前文件其他方法
		ceshi('2222')
		// 调用其他common下面js文件下的属性和方法
		console.log(config.webUrl)
		
		console.log('接收信息')
	},
	// 发送信息
	send(data){
		console.log('发送信息:'+data)
	},
	// 测试方法
	ceshi(){
		console.log('测试方法')
	}
}

import config from "./config.js"
export default {
	//webUrl,
	ceshi,
	Chat
}