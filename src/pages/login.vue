<template>
	<div>
		<h1>用户登录{{imc}}</h1>
		<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<mt-button type="primary" size="large" @click="login()">登录</mt-button>
		
	</div>
</template>

<script>
	import Data from "../api/getapi.js"
	import store from "../store/index.js"
	import {mapGetters,mapMutations} from "vuex"
	export default{
		name:"login",
		store,
		data(){
			return{
				username:"",
				password:""
			}
		},
		computed:{
			...mapGetters({imc:"imcs"})
		},
		methods:{
			...mapMutations(['cglogin']),
			login:function(){
				let that =this
				let logintext={
					//Aa123456
					password:this.password,
					smscode: '',
					country_code: '86',
					//15827422475
					phone1: this.username,
					login_type: 1
				}
				Data.apost(logintext).then((res)=>{
					if(res.error==0&&res.msg=="登录成功"){
						that.cglogin({tokens:res.token})
						this.$router.push(that.imc)
					}else{
						alert("密码错误")
					}

				})
			}
		}
	}
</script>

<style scoped>
</style>