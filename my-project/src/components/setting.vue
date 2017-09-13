<style scoped>
.container{
  position: relative;
  height: 100vh;
  padding-top: 48px;
  background-color: #F5F5F5;
}
.setting-container{
  margin-top: 12px;
  background-color: white;
}
  .setting-item{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height:44px;
    padding-left: 12px;
    padding-right: 12px;
    background-color: white;
  }
.setting-item p{
  font-size: 15px;
  color: #313033;
  line-height: 22px;
}
.setting-container hr{
  margin-left: 12px;
  margin-right: 12px;
  outline: none;
  border: none;
  border-top: 1px solid #D9D9D9;
}
  .exit{
    position: absolute;
    left: 0;
    bottom: 46px;
    height: 44px;
    width: 100%;
    line-height: 44px;
    text-align: center;
    font-size: 15px;
    color: #313033;
    background-color: white;
  }
</style>
<template>
  <div class="container">
    <topbar>
      <p slot="title">设置</p>
      <img slot="right" src="../img/search.png">
    </topbar>
    <div class="setting-container">
      <div class="setting-item">
        <p>账户与安全</p>
        <img src="../img/hole_forward.png" alt="" height="15" width="8">
      </div>
      <hr>
      <div class="setting-item">
        <p>帮助与反馈</p>
        <img src="../img/hole_forward.png" alt="" height="15" width="8">
      </div>
    </div>

    <div class="setting-container">
      <div class="setting-item">
        <p>美丽修行用户协议</p>
        <img src="../img/hole_forward.png" alt="" height="15" width="8">
      </div>
      <hr>
      <div class="setting-item">
        <p>关于美丽修行</p>
        <img src="../img/hole_forward.png" alt="" height="15" width="8">
      </div>
    </div>

    <div class="setting-container">
      <div class="setting-item">
        <p>版本信息</p>
        <img src="../img/hole_forward.png" alt="" height="15" width="8">
      </div>
      <hr>
      <div class="setting-item">
        <p>缓存清理</p>
        <img src="../img/hole_forward.png" alt="" height="15" width="8">
      </div>
    </div>
<!--退出账号-->
    <p class="exit">退出账号</p>
  </div>
</template>
<script>
  import topbar from '../components/topBar'
  export default{
    data(){
      return{}
    },
    components:{
      topbar
    }
  }
</script>
