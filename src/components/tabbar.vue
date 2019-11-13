<template>
	<div :class="{'tabbar':true,'hide':ishide}">
		<tablist v-for="a in list" :txt="a.name" :mark="a.url" :imc="imc" @c="getcal" :key="a.name">
			<img :src="'../../static/icon/'+a.img" slot="tabimg"/>
			<img :src="'../../static/icon/'+a.img1" slot="tab"/>
		</tablist>
	</div>
</template>

<script>
	import tablist from "./tablist"
	import store from "../store/index.js"
	import {mapActions} from "vuex"
	export default{
		name:"tabbar",
		store,
		data(){
			return{
				list:[
					{name:"首页",img:"1.png",img1:"6.png",url:"home"},
					{name:"分类",img:"2.png",img1:"7.png",url:"list"},
					{name:"发现",img:"3.png",img1:"8.png",url:"find"},
					{name:"购物车",img:"4.png",img1:"9.png",url:"cart"},
					{name:"我的",img:"5.png",img1:"10.png",url:"center"},
				],
				imc:"home"
				//方法有bug当没有token返回了login页面时，再次进入页面是home但底部亮色是之前的颜色
			}
		},
		props:['ishide'],
		components:{
			tablist
		},
		methods:{
			...mapActions(['addimcs']),
			getcal(v){
				this.imc=v
				this.addimcs(v)
			}
		}
	}
</script>

<style scoped>
	.tabbar{
		position: fixed;
		bottom:0;
		display: flex;
		justify-content: space-around;
		width: 100%;
		background-color:#fff;
		border-top:solid 1px red
	}
	.hide{
		display: none;
	}
</style>