<style scoped>
  .mine-container{
    padding: 12px;
    text-align: center;
    background-color: white;
  }
  h1{
    margin-top: 48px;
    font-weight: 400;
    color: #323233;
    text-align: center;
  }
  .user-name{
    margin-top: 34px;
  }
  .enter-mlxx{
    margin-top: 30px;
    width: 75%;
  }
  .register{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin:12px auto;
    width: 75%;
    color: #4B4B4C;
  }
  .dialog{
    visibility: hidden;
    margin: -16px auto;
    padding-left: 5px;
    width: 75%;
    text-align: left;
    font-size: 12px;
    color: #f44336;
  }
  .active{
    visibility: visible;
  }
</style>
<template>
  <div class="mine-container">
    <h1>登录</h1>
    <mu-text-field v-model="userName" class="user-name" hintText="请输入账号" :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="11"/><br/>
    <mu-text-field v-model="password" label="密码" hintText="请输入密码" type="password" labelFloat/><br/>
      <p class="dialog" v-bind:class="{active:isAdmin}">用户名或密码错误</p>
    <mu-raised-button @click="login" label="进入美丽修行"  class="demo-raised-button enter-mlxx" primary/>
    <div class="register">
      <mu-flat-button label="快速注册" class="demo-flat-button" to="/register"/>
      <mu-flat-button label="忘记密码" class="demo-flat-button"/>
    </div>
  </div>
</template>
<script>
  import  { mapState,mapActions } from 'vuex'
  var axios = require('axios');
  export default {
    data () {
      return {
        input: '',
        inputErrorText: '',
        multiLineInput: '',
        multiLineInputErrorText: '',
        userName:'',
        password:'',
        isAdmin:false,
      }
    },
    methods: {
      handleInputOverflow (isOverflow) {
        this.inputErrorText = isOverflow ? '手机号为11位' : ''
      },
      handleMultiLineOverflow (isOverflow) {
        this.multiLineInputErrorText = isOverflow ? '手机号为11位' : ''
      },
      login(){
        this.fetchData();
//      登陆后跳转首页并且更改底部导航
//          登录后让islogin为true，其它组件视图更新
//        this.$store.dispatch('actLogin',true);
//        直接在dom上添加跳转，不会执行login方法，所以在login方法中添加跳转
//        this.$router.push('/');
      },
      fetchData(){
        let that = this;
        axios.post('bevol/app/login?account='+this.userName+'&password='+this.password+'', {},
          {
            headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
          })
          .then(function(response) {
            if(response.data.ret == 0){
              that.$store.dispatch('userInfo',response.data.result);
              that.$store.dispatch('actLogin',true);
              that.$emit("navChange","tab_1");
              that.$router.push('/');
            }else{
              that.isAdmin = true;
            }
          })
          .catch(function(error) {
            console.log(error)
          });
      }
    }
  }
</script>

