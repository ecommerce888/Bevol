/**
 * Created by 三星 on 2017/7/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  isLogin:false,
  initData:[]
};
const mutations = {
  mutLogin(state,isLogin){
    state.isLogin = isLogin;
  },
  //请求app初始化数据存储在全局，以免重复请求接口
  mutInitData(state,initData){
    state.initData = initData;
  }
};
const actions = {
  actLogin({commit},isLogin){
    commit('mutLogin',isLogin);
  },
  initData({commit},initData){
    commit('mutInitData',initData)
  }
};
const  getters = {

};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})



