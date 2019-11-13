const objectcart={
	state:{
		num:0,
		gootlist:[{
					"id": 11,
					"name": "鱼香肉丝",
					"price": 12
				  }, {
					"id": 22,
					"name": "宫保鸡丁",
					"price": 14
				  }, {
					"id": 34,
					"name": "土豆丝",
					"price": 10,
				  }, {
					"id": 47,
					"name": "米饭",
					"price": 10,
				  },{
					"id": 49,
					"name": "蚂蚁上树",
					"price": 13
				  },
				  {
					"id": 50,
					"name": "腊肉炒蒜薹",
					"price": 15,
				
				  }],
		cart:[],
		token:localStorage.getItem('autotoken')?localStorage.getItem('autotoken'):"",
		imc:"/home"
	},
	getters:{
		abc(a){
			if(a.num%2==0){
				return "偶数"
			}else{
				return "奇数"
			}
		},
		gootlists(state){
			return state.gootlist
		},
		Carts(a){
			return a.cart
		},
		imcs(a){
			return a.imc
		},
		zj(a){
			var zj =0;
			a.cart.map((item)=>{
				return zj+=item.price*item.count
			})
			return zj
		}
	},
	actions :{
		add({commit,state},mm){
			commit('doadd',mm)
		},
		sub({commit,state},mm){
			commit('dosub',mm)
		},
		addcart({commit,state},mm){
			commit('doaddcart',mm)
		},
		del({commit,state},mm){
			commit('dodel',mm)
		},
		clear({commit,state}){
			commit("doclear")
		},
		changelogin({commit,state},mm){
			commit('cglogin',mm)
		},
		addimcs({commit,state},mm){
			commit('addimc',mm)
		}
	},
	mutations:{
		doadd(a,mm){
			a.cart[mm].count++
			//console.log()
		},
		dosub(a,mm){
			if(a.cart[mm].count>0){
				a.cart[mm].count--
			}else{
				alert("即将删除")
				a.cart.splice(mm,1)
			}
		},
		doaddcart(a,mm){
			let b =a.gootlist.find((item)=>{
				return item.id==mm
			})//b是当前点击的那列
			let c =a.cart.find((item)=>{
				return item.id==mm
			})//c是确定在cart中有没有重复的
			if(!c){
				a.cart.push({
					...b,
					count:1
				})
			}else{
				c.count++
			}
		},
		dodel(a,mm){
			a.cart.splice(mm,1)
				
		},
		doclear(a){
			a.cart=[]
			//console.log(a.imc)
			localStorage.setItem("autotoken","")
		},
		cglogin(a,mm){
			a.token=mm.tokens
			
			localStorage.setItem("autotoken",mm.tokens)
		},
		addimc(a,mm){
			a.imc=mm
		}
	}
}
export default objectcart;
