<template>
	<div>
		{{contid}}
	</div>
</template>

<script>
	import Data from "../api/getapi.js"
	export default{
		name:"homelistcont",
		data(){
			return{
				contid:""
			}
		},
		created(){
			this.contid=this.$route.params.contid
			//this.contid=this.$route.query.contid
			let obj={
				typeId:3
			}
			Data.damailist(obj).then((res)=>{
				console.log(res)
			})
		}
	}
</script>

<style scoped>

</style>