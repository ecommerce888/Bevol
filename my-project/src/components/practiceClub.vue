<style scoped>
  .container{
    background-color: #F5F5F5;
    padding: 0;
    margin: 0;
    margin-bottom: 54px;
  }
 .practice-container{
   margin-top: 44px;
 }
.practice-origin{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding:12px 30px 12px 30px;
  background-color: white;
}
 .practice-origin li{
   list-style: none;
   margin-left: 26px;
 }
 .practice-origin li:first-child{
   margin-left: 0;
 }
 .practice-origin li img{
   width: 40px;
   height: 40px;
   border-radius: 50%;
 }
 .practice-origin li p{
   margin-top: 6px;
   font-size: 12px;
   color: #646466;
 }
  .hot-topic{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    height: 44px;
    background-color: white;
  }
 .hot-topic p{
   color: #4C4B4C;
   font-size: 16px;
 }
 .hot-topic img{
   margin-left: 4px;
 }
  .protect-skin{
    padding: 12px 12px 0 12px;
    text-align: left;
    background-color: white;
  }
  .protect-skin img{
    display: inline-block;
    vertical-align: top;
    border-radius: 4px;
  }
  .protect-skin section{
    display: inline-block;
    vertical-align: top;
    margin-top: 13px;
    margin-left: 8px;
  }
  .protect-skin section h3{
    color: #4C4B4C;
    font-size: 14px;
  }
  .protect-skin section p{
    margin-top: 6px;
    font-size: 12px;
    color: #656466;
    letter-spacing: 0;
    line-height: 12px;
  }
  .protect-skin > hr{
    margin-top: 12px;
    border: none;
    border-bottom: 1px solid #CCCCCC;
  }
  /*精选动态*/
  .selected-trends{
    text-align: left;
    background-color: white;
  }
  .selected-trends section{
    width: 100%;
    padding: 12px;
  }
  .selected-trends h3{
    font-size: 16px;
    color: #323233;
    letter-spacing: 0;
    line-height: 15px;
  }
  .selected-trends section > p{
    margin-top: 12px;
    font-size: 14px;
    color: #4C4B4C;
    letter-spacing: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  /*用户信息*/
  .user-info{
    padding: 0 12px 12px 12px;
    background-color: white;
  }
  .user-info img,article{
    display: inline-block;
    vertical-align: top;
  }
  .user-info img{
    margin-top: 2px;
    border-radius: 50%;
  }
  .user-info article{
    margin-left: 9px;
  }
  .user-info article p:nth-child(1){
    font-size: 14px;
    color: #4B494C;
  }
  .user-info article p:nth-child(2){
    margin-top: 2px;
    font-size: 10px;
    color: #646266;
  }
  .good-comment{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    width: 100%;
    padding: 0 12px 12px 12px;
    vertical-align: middle;
    background-color: white;
  }
  .good-comment img{
    margin-left: 18px;
  }
  .good-comment > span{
    margin-left: 6px;
    font-size: 14px;
    color: #7C797F;
    letter-spacing: 0;
    line-height: 22px;
  }
</style>
<template>
  <div class="container">
      <topbar>
        <p slot="title">修行社</p>
        <img slot="right" src="./../img/search.png" alt="" width="17" height="17" onerror="onerror=null;src='http://iph.href.lu/17x17'">
      </topbar>
      <div class="practice-container">
        <!--<img src="../img/skin_like_bg.png" alt="" height="120px" width="100%">-->
        <div class="swiper-container" style="height:120px;width: 100%">
          <div class="swiper-wrapper">
            <div v-for="item in topBannerData" class="swiper-slide">
              <img v-bind:src="item.image" alt="banner" width="100%" height="155" onerror="onerror=null;src='http://iph.href.lu/414x155'">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

        </div>


        <ul class="practice-origin">
          <li v-for="item in topImgData">
            <img :src="item.button_image" alt="" onerror="onerror=null;src='http://iph.href.lu/120x120'">
            <p>{{item.title}}</p>
          </li>
        </ul>
      </div>
    <!--热门话题-->
    <router-link to="/hotTopic" class="origin">
    <div class="hot-topic">
      <p>热门话题</p>
      <img src="../img/home_into.png" alt="" width="18" height="18">
    </div>
    </router-link>
    <div class="protect-skin" v-for="item in protectSkinData">
      <img :src="item.mini_imageSrc" alt="" width="64" height="64" onerror="onerror=null;src='http://iph.href.lu/64x64'">
      <section>
        <h3>{{item.title}}</h3>
        <p>{{item.hit_num}}人参与</p>
      </section>
      <hr>
    </div>
    <!--精选动态-->
    <div class="hot-topic">
      <p>精选动态</p>
    </div>
    <div class="selected-trends" v-for="(item,index) in userPartData">
      <img :src="item.imgSrc" alt="" width="100%" height="220" onerror="onerror=null;src='http://iph.href.lu/414x220'">
      <section>
      <h3>{{item.title}}</h3>
      <p>{{item.userPartDetails[0].content}}</p>
      </section>
      <div class="user-info">
        <img :src="item.userBaseInfo.headimgurl" alt="" width="32" height="32" onerror="onerror=null;src='http://iph.href.lu/32x32'">
        <article>
          <p>{{item.userBaseInfo.nicknam}}</p>
          <p>{{skin(index)}}</p>
        </article>
      </div>
      <div class="good-comment">
        <img src="../img/select_love.png" alt="" width="20" height="20" onerror="onerror=null;src='http://iph.href.lu/20x20'">
        <span>{{item.likeNum}}</span>
        <img src="../img/select_comment.png" alt="" width="20"  height="20" onerror="onerror=null;src='http://iph.href.lu/20x20'">
        <span>{{item.commentNum}}</span>
      </div>
    </div>


  </div>
</template>
<script>
  import topbar from '../components/topBar'
  var axios = require('axios');
  var jsonp = require('jsonp');
  var qs = require('qs');
  require('promise/polyfill-done');

  export  default {
      name:'top',
      data () {
          return {
            protectSkinData:[],
            selectedTrendsData:[],
            topImgData:[],
            topBannerData:[],
            userPartData:[]
          }
      },
    components:{
          topbar
    },
    created(){
      this.fetchData();
    },
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
      });
    },
    methods: {
      fetchData:function () {
          let initData = this.$store.state.initData;
          let that = this;
          if(initData.length != 0 ){
            this.topImgData = initData.xxsButton;
            this.topBannerData = initData.xxsBanners;
          } else {
            let url = encodeURI('http://tapi.bevol.cn/init7');
            jsonp(url, null, function (err, data) {
              if (err) {
                console.error(err.message);
              } else {
                that.topImgData = data.result.xxsButton;
                that.topBannerData = data.result.xxsBanners;
                console.log(data);
              }
            });
          }
//      精选动态
        axios.get('../static/virtualData/featuredDynamic.json')
          .then(function (response) {
            that.userPartData = response.data.result.userParts;
            that.protectSkinData = response.data.result.hostLists;
//            console.log("精选动态：" + JSON.stringify(that.userPartData));
          })
          .catch(function (error) {
            console.log(error);
          });
//        axios.post('tapi/app/login', {},
//          {
//              headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
//          })
//          .then(function(response) {
//            console.log("心得数据+++++++++++++++++++" + JSON.stringify(response));
//          })
//          .catch(function(error) {
//            alert(error);
//          });

      },
      skin: function (index) {
//            将取出的肤质标签子母分割拼成真正的肤质标签
        let tag = this.userPartData[index].userBaseInfo.skinResults;
        if (tag != null) {
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
        }else{
            return "";
        }
      }
    }
  }
</script>
