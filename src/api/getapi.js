import axios from "axios"
import qs from "qs"
axios.interceptors.request.use(
	config=>{
		let token =localStorage.getItem("autotoken")+123456
		if(token){
			config.headers.token=`${token}`;
		}
		return config
	},
	err=>{
		return Promise.reject(err);
	}
)
const aget =()=>{
	return axios.get("/api/index/index/indexpic").then((res)=>res.data)
}
//post 传值axios.post(url,qs.stringify(对象参数))
const apost=(abc)=>{
	return axios.post("/api/index/Login/login",qs.stringify(abc)).then((res)=>res.data)
}
//get不传值axios.get(url)
const damaitype=()=>{
	return axios.get("/damai/index/types").then((res)=>res.data)
}
//get传值axios.get(url,{params:{对象参数}})
const damailist=(abc)=>{
	return axios.get("/damai/index/details",{
		params:{
			...abc
		}
	})
}
/*
			axios.post("/api/index/Login/login",qs.stringify(params)).then((res)=>{
				console.log(res.data)
			})*/
export default{
	aget,
	apost,
	damaitype,
	damailist
}
