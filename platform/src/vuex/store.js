
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
  isLogin:0,     //初始时候给一个 isLogin=0 表示用户未登录
};
const mutations = {
  changeLogin(state,data){
    state.isLogin = data;
  }
};
export default new Vuex.Store({
    state,mutations
});