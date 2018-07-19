import axios from 'axios'
import store from '@/store/store'
import router from '@/router/router'
import Promise from 'es6-promise'
import Qs from 'qs'
var instance = axios.create({
  baseURL: process.env.API_HOST+'/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'application/x-www-form-urlencoded'},
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    return Qs.stringify(data,{arrayFormat: 'brackets'});
  }],
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },
});
// http request 拦截器
instance.interceptors.request.use(
    config => {
//      if (store.state.token) {
//        config.headers['token'] = store.state.token;
//		  config.headers['loginUserId']=store.state.userId
//      }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
instance.interceptors.response.use(
    response => {
    	
//         	if(response.data.code=='401'){
//  		router.replace({
//                      path: '/login',
//                     query: {redirect: router.currentRoute.fullPath}
//                  })
//  	}
        return response.data;
    },
    
    error => {
    	if(error){
    		        store.commit('LOGOUT');
//                  router.replace({
//                      path: 'login',
//                      query: {redirect: router.currentRoute.fullPath}
//                  })
    	}
      console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response)
    });

export default instance;
