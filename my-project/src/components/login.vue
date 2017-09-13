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
</style>
<template>
  <div class="mine-container">
    <h1>登录</h1>
    <mu-text-field class="user-name" hintText="请输入账号" :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="11"/><br/>
    <mu-text-field label="密码" hintText="请输入密码" type="password" labelFloat/><br/>
    <mu-raised-button @click="login" label="进入美丽修行"  class="demo-raised-button enter-mlxx" primary/>
    <div class="register">
      <mu-flat-button label="快速注册" class="demo-flat-button"/>
      <mu-flat-button label="忘记密码" class="demo-flat-button"/>
    </div>
  </div>
</template>
<script>
  import  { mapState,mapActions } from 'vuex'
  export default {
    data () {
      return {
        input: '',
        inputErrorText: '',
        multiLineInput: '',
        multiLineInputErrorText: ''
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
//          登录后让islogin为true，其它组件视图更新
        this.$store.dispatch('actLogin',true);
//        直接在dom上添加跳转，不会执行login方法，所以在login方法中添加跳转
        this.$router.push('/');
      }
    }
  }
</script>

