<template>
	<view class="other-login u-f-ac">
		<block v-for="item in providerList" :key="item.index">
			<view class="u-f-ajc u-f1" @tap="tologin(item)">
				<view class=" u-f-ajc" 
				:class="[]"></view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				providerList: [],
				
			}
		},
		onLoad() {
			this.getLoginAuth()
		},
		methods:{
			//获取当前登录渠道
			getLoginAuth(){
				    uni.getProvider({
				        service: 'oauth',
				        success: (result) => {
				            this.providerList = result.provider.map((value) => {
				                let providerName = '';
								let icon='';
				                switch (value) {
				                    case 'weixin':
				                        providerName = '微信登录'
										icon='weixin'
				                        break;
				                    case 'qq':
				                        providerName = 'QQ登录'
										icon='QQ'
				                        break;
				                    case 'sinaweibo':
				                        providerName = '新浪微博登录'
										icon='xinlangweibo'
				                        break;
				                    case 'alipay':
				                        providerName = '支付宝登录'
										icon=''
				                        break;
				                }
				                return {
				                    name: providerName,
									icon:icon,
				                    id: value
				                }
				            });
				
				        },
				        fail: (error) => {
				            console.log('获取登录通道失败', error);
				        }
				    });
			},
			//登录
			tologin(provider) {
			    uni.login({
			        provider: provider.id,
			        // #ifdef MP-ALIPAY
			        scopes: 'auth_user', //支付宝小程序需设置授权类型
			        // #endif
			        success: (res) => {
						console.log(json.stringify(res))
			            console.log('login success:', res);
			            // 更新保存在 store 中的登录状态
			            console.log('灯枯成功，保存到本地存储，修改当前用户登陆状态')
			        },
			        fail: (err) => {
			            console.log('login fail:', err);
			        }
			    });
			}
		}
	}
</script>

<style>
	.other-login{
		padding: 20upx 80upx;
	}
	.other-login>view>view{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		font-size: 55upx;
		color: #FFFFFF;
	}
	.other-login .icon-QQ{
		background: #2CAEFC;
	}
	.other-login .icon-weixin{
		background: #2BD19B;
	}
	.other-login .icon-xinlangweibo{
		background: #FC7729;
	}
</style>
