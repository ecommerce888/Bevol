<style scoped>
  .container{
    padding-top: 44px;
    background-color: #F5F5F5;
    height: 100vh;
    text-align: center;
  }
  #topbar{
    padding-right: 0;
  }
  #topbar a{
    text-decoration: none;
    color: #4B494C;
    font-size: 14px;
  }
 #user-info{
   padding-top: 12px;
   margin-top: 4px;
   text-align: left;
 }
  #userName{
    margin-top: 5px;
    font-size: 15px;
    color: #323133;
  }
  #userTag{
    margin-top: 2px;
    font-size: 12px;
    color: #7D7A7F;
  }
  .practiceScore{
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: white;
    border-top: 1px solid #F3F3F3 ;
  }
  .practiceScore::after{
    content: "";
    position: absolute;
    top: 15px;
    left: 50%;
    height: 20px;
    width: 1px;
    background-color: #F3F3F3;
  }
  .practiceScore p{
    flex-grow: 1;
    font-size: 14px;
    color: #979499;
    text-align: center;
  }
  .mine{
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    background-color: white;
  }
  .mine-item{
    padding-top: 24px;
    padding-bottom: 24px;
    width:33.3%;
    text-align: center;
    border: 1px solid #F5F5F5;
    border-left: none;
    background-color: white;
  }
  .mine-item p{
    margin-top: 7px;
    font-size: 12px;
    color: #313133;
    text-align: center;
  }
  .feed-back{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    height: 44px;
    padding-left: 12px;
    padding-right: 12px;
    background-color: white;
  }
  .feed-back p{
    font-size: 15px;
    color: #313033;
    line-height: 22px;
  }
  .new-message{
    position: absolute;
    left: 29px;
    top: 9px;
    width: 15px;
    height: 15px;
    color: white;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    background-color: #ff6c72;
    border-radius: 50%
  }
</style>
<template>
  <div class="container">
  <topbar id="topbar">
    <router-link slot="left" to="/setting">
      <p style="margin-left: 12px">设置</p>
    </router-link>
    <p slot="title">我的</p>
    <div slot="right" style="position: relative">
      <img src="./../img/my_message.png" alt="" width="48" height="48">
      <p class="new-message">2</p>
    </div>
  </topbar>
     <userInfo id="user-info">
         <img id="userImg" slot="userImg" :src="userInfo.headimgurl" alt="" width="50" height="50">
         <p id="userName" slot="userName">{{userInfo.nickname}}</p>
         <p id="userTag" slot="userTag">{{skin()}}</p>
     </userInfo>
    <!--修行值-->
    <div class="practiceScore">
      <p>获赞 {{userInfo.commentLikeNum}}</p>
      <p>修行值 {{userInfo.score}}</p>
    </div>
    <!--我的收藏-->
    <div class="mine">
      <div class="mine-item">
        <img src="../img/my_like.png" alt="" width="24" height="24">
        <p>我的收藏</p>
      </div>
      <div class="mine-item">
        <img src="../img/my_skin.png" alt="" width="24" height="24">
        <p>我的肤质</p>
      </div>
      <div class="mine-item">
        <img src="../img/my_experience.png" alt="" width="24" height="24">
        <p>我的心得</p>
      </div>
      <div class="mine-item">
        <img src="../img/my_comment.png" alt="" width="24" height="24">
        <p>我的评论</p>
      </div>
    </div>
    <!--意见反馈-->
    <div class="feed-back">
      <p>意见反馈</p>
      <img src="../img/hole_forward.png" alt="" width="8" height="15">
    </div>
  </div>
</template>
<script>
  import userInfo from '../components/userInfo';
  import topbar from '../components/topBar';
  var axios = require('axios');
  export default{
      data(){
          return{
              userInfo:{}
          }
      },
    mounted(){
          //在登陆页请求到用户数据放到state中。取出来就可以了
      this.userInfo = this.$store.state.userInfo;
    },
    components:{
          userInfo,
          topbar
    },
    methods:{
      skin: function () {
//            将取出的肤质标签子母分割拼成真正的肤质标签
        let tag = this.userInfo.skinResults;
        tag = tag + "";
        let tagArr = tag.split('_');
        let realTag = "";
        tagArr.forEach(function (value) {
          switch (value) {
            case "DQ":
              realTag += "轻干 |";
              break;
            case "DZ":
              realTag += "重干 |";
              break;
            case "OQ":
              realTag += "轻油 |";
              break;
            case "OZ":
              realTag += "重油 |";
              break;
            case "RQ":
              realTag += " 轻耐 |";
              break;
            case "RZ":
              realTag += " 重耐 |";
              break;
            case "SQ":
              realTag += " 轻敏 |";
              break;
            case "SZ":
              realTag += " 重敏 |";
              break;
            case "N":
              realTag += " 非色素 |";
              break;
            case "P":
              realTag += " 色素 |";
              break;
            case "T":
              realTag += " 紧致";
              break;
            case "W":
              realTag += " 皱纹";
              break;
            default:
              realTag += value;
              break;
          }
        });
        return realTag;
      }
    }
  }
</script>
