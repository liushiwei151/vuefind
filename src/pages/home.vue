<template>
	<div>
		<mt-header fixed title="首页"></mt-header>
		<banner></banner>
		<homelist></homelist>
	</div>
</template>

<script>
	import banner from "../components/banner"
	import homelist from "../components/homelist"
	export default{
		name:"home",
		components:{
			banner,
			homelist
		}
	}
</script>

<style scoped>
</style>