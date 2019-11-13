import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Cart from '@/pages/cart'
import List from '@/pages/list'
import Center from '@/pages/center'
import Find from '@/pages/find'
import Homelistcont from '@/pages/homelistcont'

Vue.use(Router)

const router = new Router({
	mode:"history",
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
     {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:"/hlcont/:contid",
      component:Homelistcont
    },
    /* {
      path:"/hlcont",
      component:Homelistcont
    },*/
    {
    	path:'/cart',
    	name:'cart',
    	component:Cart
    },
    {
    	path:'/list',
    	name:'list',
    	component:List
    },
    {
    	path:"/center",
    	name:"center",
    	component:Center
    },
    {
    	path:"/find",
    	name:"find",
    	component:Find
    }
  ]
})
router.beforeEach((to,from,next)=>{
	if(to.path==="/"){
		next()
	}else{
		let token =localStorage.getItem("autotoken")
		if(token===""||token===null){
			next("/")
		}else{
			next()
		}
	}
	
})
export default router