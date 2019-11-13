<template>
		<ul class="homelist">
			<li v-for="(a,b) in list" @click="fn(b)">{{a.cname}}</li>
		</ul>

</template>

<script>
	import Data from "../api/getapi.js"
	export default{
		name:"homelist",
		data(){
			return {
				list:[]
			}
		},
		methods:{
			fn:function(e){
				let id =this.list[e].cid
				this.$router.push("/hlcont/"+id)
				/*this.$router.push({
					name:"aaa",
					params:{
						contid:id
					}
				})*/
				/*this.$router.push({
					path:"/hlcont",
					query:{
						contid:id
					}
				})*/
			}
		},
		created(){
			Data.damaitype().then((res)=>{
				this.list=res
			})
		}
	}
</script>

<style scoped>
	.homelist{
		width:100%;
		margin-top:10px;
	}
	.homelist>li{
		width:20%;
		float:left;
		margin-bottom:5px;
	}
</style>