
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
  token:window.sessionStorage.getItem('token'),
  isMerchant:window.sessionStorage.getItem('isMerchant')
};
const mutations = {
  //存储token
  changetoken(state,data){
    state.token = data;
    window.sessionStorage.setItem('token', data);
  },
  //存储isMerchant
  changeMerchant(state,data){
    state.isMerchant = data;
    window.sessionStorage.setItem('isMerchant', data);
  },
  //清除token
  removetoken(state){
    state.token = null;
    window.sessionStorage.removeItem('token');
  },
   //清除isMerchant
  removeMerchant(state){
    state.isMerchant = null;
    window.sessionStorage.removeItem('isMerchant');
  }
};
export default new Vuex.Store({
    state,mutations
});