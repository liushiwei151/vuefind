<template>
	<div>
		<ul class="cartlist">
			<li>序号</li>
			<li>名称</li>
			<li>价格</li>
			<li>数量</li>
			<li>操作</li>
		</ul>
		<ul v-for="(a,b) in Cartsss" class="cartlist">
			<li>{{a.id}}</li>
			<li>{{a.name}}</li>
			<li>{{a.price}}</li>
			<li class="num">
				<button @click="sub(b)">-</button>
				<span>{{a.count}}</span>
				<button @click="add(b)">+</button>
			</li>
			<li><mt-button type="danger" @click="del(b)">删除</mt-button></li>
		</ul>
		<ul class="cartlist">
			<li>总价:{{zj}}</li>
			<li><button @click="clear()">清空购物车</button></li>
			<li><button>提交订单</button></li>
		</ul>
	</div>
</template>

<script>
	import store from "../store/index.js"
	import {mapState,mapGetters,mapActions} from "vuex"
	export default{
		name:"cart",
		store,
		computed:{
			...mapGetters({
				abc:"abc",
				Cartsss:"Carts",
				zj:"zj"
			}),
			...mapState(['num'])
		},
		methods:{
			...mapActions(['sub','add','del','clear']),
		}
		
	}
</script>

<style scoped>
	.cartlist{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.cartlist>li{
		flex: 1;
		margin:15px 0;		
	}
	.num button{
		flex: 1;
	}
	.num{
		display: flex;
	}
	.num span{
		flex: 1;
	}
</style>