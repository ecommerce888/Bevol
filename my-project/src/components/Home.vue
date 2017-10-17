<style scoped>
  .container{
    background-color: #dcdcdc;
    padding-bottom: 60px;
    text-align: center;
  }
  header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #AC69FE ;
    padding: 5px 8px 5px 8px;
  }
  #top-search{
    display: inline-block;
    margin-left: 12px;
    width: 85%;
    color: white;
    background-color: #C596FE;
    border-radius: 100px;
    padding: 5px 15px 5px 15px;
    text-align: left;
    font-size: 12px;
  }
  #top-search img{
    vertical-align: middle;
  }
  #right-message {
    margin-left: 12px;
    vertical-align: middle;
  }
/*swiper*/
  #first-swiper{
    width: 100%;
    height: 155px;
    margin-top: 40px;
    background-color: #7e8082;
  }
  #second-swiper{
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: white;
  }
  #second-swiper .swiper-slide{
    /*width: 80vw !important;*/
    margin-left: 15px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px #525252;
    background-color: white;
  }
  .swiper-slide a{
    text-decoration: none;
  }
  .comment{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding-bottom: 12px;
    border-bottom: 1px solid #bababa;
  }
  .comment img{
    margin-left: 10px;
    width: 100px;
    height: 100px;
    background-color: #e8e8e8;
  }
  .comment img,section{
    display: inline-block;
    color: #323233;
  }
  .comment section{
    width: 70%;
    margin-left: 8px;
    text-align: left;
  }
  .comment section h3{
    width: 80%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-family: 幼圆;
  }
  .comment section p{
    width: 100%;
    height: 60px;
    padding-right: 12px;
    margin-top: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    -moz-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    font-weight: 400;
  }
  .user-info{
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    flex-basis: 100%;
    width: 100%;
    height: 56px;
    padding-top:12px;
    margin: 0;
  }
  .user-info img{
    border-radius: 50%;
    background-color:#e8e8e8 ;
  }
  .user-info > p{
    position: absolute;
    right: 12px;
    top: 12px;
    font-size: 12px;
    color: #7e8082;
    align-self: stretch;
  }
 #name-job{
   margin-left: 5px;
   text-align: left;
   font-size: 14px;
   line-height: 14px;
   color: #4B494C;
   flex-grow: 1;
 }
  #name-job p:nth-child(2){
    margin-top: 2px;
    font-size: 10px;
    color: #646266;
  }

  /*swiper end*/
  .sort-goods{
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    background-color: white;
  }
  .sort-goods > div{
    width: 25%;
    padding-top:10px;
    padding-bottom: 10px;
    text-align: center;
  }
  .sort-goods > div p{
    margin-top: 5px;
    color: #323233;
    text-align: center;
  }

  .origin-container{
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 4px;
    width: 100%;
    background-color: white;
    padding-top: 18px;
    padding-bottom: 15px;
  }
  .origin{
   /*padding: 12px 20px 12px 12px;*/
    width: 50%;
    text-align: center;
  }
  .origin i img{
        vertical-align: middle;
  }
  .origin section{
    display: inline-block;
    margin-left: 5px;
    vertical-align: middle;
    text-align: left;
  }
  .origin section p{
    font-size: 16px;
    color: #323233;
    line-height: 16px;
  }
  .origin section p:nth-child(2){
    margin-top: 4px;
    font-size: 12px;
    color: #B1AFB3;
  }
  h2{
    margin-top: 4px;
    border-bottom: 1px solid #D9D9D9;
    background-color: white;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 16px;
    color: #4C4B4C ;
    text-align: center;
    font-family: 幼圆;
  }
  h2 img{
    margin-left: 5px;
    margin-bottom: 3px;
  }
  .skin-tag{
    padding-top: 34px;
    padding-bottom: 32px;
    background-image: url(./../img/skin_like_bg.png);
    background-size: cover;
  }
  .skin-tag h2{
    font-size: 18px;
    font-weight: 400;
    color: #FFFFFF;
    border: none;
    background-color: transparent;
  }
  .skin-tag .tag{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-top: 11px;
  }
  .skin-tag .tag li{
    margin-left: 16px;
    list-style: none;
    color: #FFFFFF;
  }
  .skin-tag .tag li:nth-child(1){
    margin-left: 0;
  }
  .skin-tag .tag li p:nth-child(1){
    padding: 5px 10px 5px 10px;
    border: 1px solid #FFFFFF;
    border-radius: 8px;
    font-size: 18px;
    line-height: normal;
  }
  .skin-tag .tag li p:nth-child(2){
    margin-top: 6px;
    font-size: 14px;
  }
  #skin-more{
    margin-top: 11px;
    color:#FFFFFF;
    font-size: 14px;
    text-align: center;
  }
  /* 骨架屏样式 */
  .load-h3{
    height: 20px;
    background-color: #e8e8e8;
  }
  .load-p{
    width: 50px;
    height: 20px;
    background-color: #e8e8e8;
  }
  .load-p-small{
    width: 30px;
    height: 15px;
    background-color: #e8e8e8;
  }
  .name-job{
    margin-left: 5px;
    text-align: left;
    flex-grow: 1;
  }
  .name-job p:nth-child(1){
    width: 50px;
    height: 15px;
    background-color: #e8e8e8;
  }
  .name-job p:nth-child(2){
    margin-top: 2px;
    width: 70px;
    height: 15px;
    background-color: #e8e8e8;
  }
</style>
<template>
  <div class="container">
    <router-link to="/search">
    <header>
      <div id="top-search">
        <i><img src="../img/search_home.png" alt="" width="16" height="16"></i>
        <span>查询50万种化妆品、5万种成分及心得</span>
      </div>
      <i><img src="../img/title_message.png" alt="" id="right-message" width="18" height="18"></i>
    </header>
    </router-link>
    <swiper :options="swiperOption" id="first-swiper">
      <!-- slides -->
      <swiper-slide v-for="item in sliderData" :key="item.id">
        <img v-bind:src="item.image" alt="banner" width="100%" height="155" onerror="onerror=null;src='http://iph.href.lu/414x155'">
      </swiper-slide>
<!-- 分页 -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <!--产品分类-->
    <div v-once class="sort-goods">
      <div v-for="item in productItems">
        <!--<i class="fa fa-diamond" aria-hidden="true"></i>-->
        <!--<router-link to="SearchProduct">-->
        <router-link :to="{ name : 'searchProduct' , params : { sort : item.sortId }}">
        <i><img v-bind:src="item.preImg" alt="product" width="32" height="32" ></i>
        <p>{{item.name}}</p>
        </router-link>
      </div>
    </div>
    <!--达人原创-->
    <div v-once class="origin-container">
      <div class="origin" style="border-right: 1px solid #CCCCCC;">
        <router-link to="/mxOrigin" class="origin">
        <i><img v-bind:src="img.mx_origin" alt="达人原创" width="22" height="24"></i>
        <section>
          <p>美修原创</p>
          <p>精选达人美修秘笈</p>
        </section>
        </router-link>
      </div>
      <router-link to="/hotTopic" class="origin">
        <i><img v-bind:src="img.hot_topic"  alt="热门话题" width="28" height="23"></i>
        <section>
          <p>热门话题</p>
          <p>美修热门心得集合</p>
        </section>
      </router-link>
    </div>

<!--精选点评-->
    <h2>精选点评<img src="../img/home_into.png" alt="" width="18" height="18" style="vertical-align: middle"></h2>

    <swiper :options="swiperOptionSecond" id="second-swiper">
      <swiper-slide v-show="bannerData.length != 0"  v-for="item in bannerData" :key="item.id">
        <router-link :to="{name:'productDetail',params: {keywords : item.goodsTitle,imgSrc : item.goodsImageSrc,id : item.goodsId,name:item.goodsTitle}}">
          <div class="comment">
            <img  v-bind:src="item.goodsImageSrc" alt="图片" width="100" height="100" onerror="onerror=null;src='http://iph.href.lu/100x100'">
            <section>
              <h3>{{item.goodsTitle}}</h3>
              <p>
                {{item.content}}
              </p>
            </section>
          </div>
          <div class="user-info">
            <img v-bind:src="item.headimgurl" alt="" width="32" height="32">
            <div id="name-job">
              <p>{{item.nickname}}</p>
              <p>{{skin(item.skinResults)}}</p>
            </div>
            <p>{{item.essenceCommentNum}}篇精华点评</p>
          </div>
        </router-link>
      </swiper-slide>

      <!-- 数据未渲染时加载骨架屏 -->
      <div v-show="bannerData.length == 0" class="swiper-wrapper">
        <div  class="swiper-slide" v-for="item in 3">
          <div class="comment">
            <img  src="" alt="" width="100" height="100">
            <section>
              <h3 class="load-h3"></h3>
              <p class="load-p"></p>
            </section>
          </div>
          <div class="user-info">
            <img src="" alt="" width="32" height="32">
            <div class="name-job">
              <p></p>
              <p></p>
            </div>
            <p class="load-p-small"></p>
          </div>
        </div>
      </div>
      <!-- 骨架屏幕end-->
    </swiper>

    <!--我的肤质标签-->
    <div v-if="$store.state.isLogin">
    <div class="skin-tag">
      <h2>我的肤质标签</h2>
      <ul class="tag">
        <li>
          <p>D</p>
          <p>轻干</p>
        </li>
        <li>
          <p>D</p>
          <p>轻干</p>
        </li>
        <li>
          <p>D</p>
          <p>轻干</p>
        </li>
        <li>
          <p>D</p>
          <p>轻干</p>
        </li>
      </ul>
      <p id="skin-more">点击查看详情</p>
    </div>
  </div>
    <!--没登录时的肤质标签-->
    <div v-else>
      <div class="skin-tag">
        <h2>我的肤质标签</h2>
        <ul class="tag">
          <li>
            <p>?</p>
            <p>干/油</p>
          </li>
          <li>
            <p>?</p>
            <p>敏/耐</p>
          </li>
          <li>
            <p>?</p>
            <p>色/非</p>
          </li>
          <li>
            <p>?</p>
            <p>皱/紧</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import mapState from  'vuex'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  var jsonp = require('jsonp');

  export default {
      data(){
          return {
            productItems:[
              {name:"洁面",preImg:"../static/img/tab01_fs.png",sortId:6},
              {name:"化妆水",preImg:"../static/img/tab01_hzs.png",sortId:7},
              {name:"精华",preImg:"../static/img/tab01_jh.png",sortId:8},
              {name:"乳霜",preImg:"../static/img/tab01_jiemian.png",sortId:9},
              {name:"眼霜",preImg:"../static/img/tab01_rs.png",sortId:10},
              {name:"面膜",preImg:"../static/img/tab01_mm.png",sortId:11},
              {name:"防晒",preImg:"../static/img/tab01_xh.png",sortId:12},
              {name:"洗护",preImg:"../static/img/tab01_ys.png",sortId:13},
                ],
            img: {
                mx_origin:"../static/img/mx_origin.png",
                hot_topic:"../static/img/hot_topic.png"
            },
            bannerData:[],
            sliderData:[],
            productData:[],
            skinLikeData:["../static/img/TOP1.png","../static/img/TOP2.png","../static/img/TOP3.png",
              "../static/img/TOP4.png","../static/img/TOP5.png"],
            swiperOption: {
              //http://www.swiper.com.cn/api/
              // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
              notNextTick: true,
              autoplay: 3000,
              direction : 'horizontal',
              grabCursor : true,
              setWrapperSize :true,
              autoHeight: true,
              pagination : '.swiper-pagination',
              paginationClickable :true,
              observeParents:true,
            },
            swiperOptionSecond: {
              width:320,
              notNextTick: true,
              direction : 'horizontal',
              setWrapperSize :true,
              autoHeight: true,
              observeParents:true,
              freeMode : true,
            },
          }
      },
    created(){
      this.fetchData();
    },
    computed: {
//      ...mapState({ headText: state => state.text })
    },
    components: {
      swiper,
      swiperSlide
    },
    mounted () {
//      this.fetchData();
      this.sameSkinfetchData();
    },
    methods:{
      fetchData:function () {
//使用jsonp跨域请求数据
        var that =this;
        jsonp('http://api.bevol.cn/index5', null, function (err, data) {
            if (err) {
            console.error(err.message);
          } else {
            that.bannerData = data.result.essenceComment;
            that.sliderData = data.result.find;
            console.log("bannerData:" + that.bannerData);
          }
        });
      },
      sameSkinfetchData:function (){
        var that =this;
        let url= encodeURI('https://api.bevol.cn/search/goods/index3?category=6&cps=4&rows=5');
        jsonp(url,null, function (err, data) {
          if (err) {
            console.error(err.message);
          } else {
            that.productData = data.data.items;
            console.log(that.productData);
          }
        });
      },
      skin: function (tag) {
//            将取出的肤质标签子母分割拼成真正的肤质标签
//        let tag = this.userPartData[index].userBaseInfo.skinResults;
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
