/**
 * Created by 三星 on 2017/7/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  isLogin:false,
  initData:[],
  userInfo:{},
  practiceData:{}
};
const mutations = {
  mutLogin(state,isLogin){
    state.isLogin = isLogin;
  },
  //请求app初始化数据存储在全局，以免重复请求接口
  mutInitData(state,initData){
    state.initData = initData;
  },
  mutUserInfo(state,userInfo){
    state.userInfo = userInfo;
  },
  mutPracticeData(state,practiceData){
    state.practiceData = practiceData;
  }
};
const actions = {
  actLogin({commit},isLogin){
    commit('mutLogin',isLogin);
  },
  initData({commit},initData){
    commit('mutInitData',initData)
  },
  userInfo({commit},userInfo){
    commit('mutUserInfo',userInfo)
  },
  practiceData({commit},practiceData){
    commit('mutPracticeData',practiceData)
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



