<template>
  <div id="app">
    <keep-alive include="home">
    	<router-view/>
    </keep-alive>
    <tabbar :ishide="ishid"></tabbar>
  </div>
</template>

<script>
	import tabbar from "./components/tabbar"
export default {
  name: 'App',
  data(){
  	return{
  		ishid:true
  	}
  },
  mounted(){
  	console.log(localStorage.getItem("autotoken"))
  	if(localStorage.getItem("autotoken")){
  		this.$router.push("/home")
  		this.ishid=false
  	}else{
  		this.$router.push("/")
  	}
  		
  },
  watch:{
  	"$route":function(obj){
  		var paths=["/home","/list","/find","/cart","/center"];
  		var bol =paths.some((res)=>{
  				return res==obj.path
  		})
  			this.ishid=!bol
  	}
  },
  components:{
  	tabbar
  }
}
</script>

<style>
*{
	margin:0;
	padding:0;
}
ul{
	margin: 0;
	padding: 0;
	list-style-type: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
