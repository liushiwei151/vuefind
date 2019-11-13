<template>
	<div>
		<ul v-for="item in gootlists" class="cartlist">
			<li>{{item.id}}</li>
			<li>{{item.name}}</li>
			<li>{{item.price}}</li>
			<li><mt-button type="primary" class="button" @click="addcart(item.id)">加入购物车</mt-button></li>
		</ul>
	</div>
</template>

<script>
	import store from '../store/index.js'
	import {mapState,mapGetters,mapActions} from 'Vuex'
	export default{
		name:"list",
		store,
		computed:{
			...mapGetters(['gootlists'])
		},
		methods:{
			...mapActions(['addcart'])
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
	.button{
		font-size: 13px;
	}
</style>