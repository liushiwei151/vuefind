import Vuex from "vuex"
import Vue from "vue"
import objectcart from "./modules/cart"
Vue.use(Vuex)

const store =new Vuex.Store({
	modules:{
		objectcart
	}
})
export default store
 