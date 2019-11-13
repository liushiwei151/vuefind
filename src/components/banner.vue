<template>
		<div>
			<mt-swipe :auto="4000" class="banner">
			  <mt-swipe-item v-for="(a,b) in pics" :key="b">
			  	<img :src="a.pic" />
			  </mt-swipe-item>
			</mt-swipe>
		</div>
</template>

<script>
	import Data from "../api/getapi.js"
	export default{
		name:"banner",
		data(){
			return{
				pics:[]
			}
		},
		created(){
			Data.aget().then((res)=>{
				this.pics=res.data.pics
			})
		}
	}
</script>

<style scoped>
	.banner{
		width:100%;
		height:150px;
		margin-top:40px;
	}
	img{
		width:100%;
	}
</style>