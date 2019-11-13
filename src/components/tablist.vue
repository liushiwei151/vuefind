<template>
	<div @click="fn()">
		<span v-show="bol"><slot name="tabimg"></slot></span>
		<span v-show="!bol"><slot name="tab"></slot></span>
		<p :class="{'active':!bol}">{{txt}}</p>
	</div>
</template>

<script>
	export default{
		name:"tablist",
		data(){
			return{
				//bol:true	
			}
		},
		props:["txt","mark","imc"],
		computed:{
			'bol':function(){
				if(this.mark==this.imc){
					return false
				}else{
					return true
				}
			}
		},
		methods:{
			fn:function(mark){
				this.$emit("c",this.mark)
				this.$router.push('/'+this.mark)
			}
		}
	}
</script>

<style scoped>
	.active{
		color:red
	}
</style>