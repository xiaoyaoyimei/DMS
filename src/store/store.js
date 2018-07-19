import Vue from 'vue'  
import Vuex from 'vuex'  
import * as actions from './actions'
import * as getters from './getters'
Vue.use(Vuex)  
const state = {
    token: null,
    userId:null
}
const mutations = {
    LOGIN(state, payload) {
       	  	state.token = payload.token  
			state.userId = payload.userId  
			localStorage.token = payload.token   
			localStorage.userId = payload.userId 
    },
    LOGOUT(state) {
          	state.token = null
		  	state.userId = null
			localStorage.removeItem('token')  
			localStorage.removeItem('userId') 
    }
}
// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})