<template>
	<div>
		<div @click="fn()" id="dian">center</div>
	<a href="sms:点击">dianji</a>
	</div>
</template>

<script>
	export default{
		name:"center",
		methods:{
			fn:function(){
				var a =document.getElementById("dian").setAttribute("href","tel:100")
				console.log(a)
			}
		}
	}
</script>

<style scoped>
	
</style>