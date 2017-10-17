<style scoped>
  .container{
    width: 100%;
    background-color: white;
  }
  .top-nav{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 900;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    width: 100%;
    background-color: white;
  }
  .origin-head{
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 44px;
    width: 100%;
    height: 220px;
    background-color: #e8e8e8;
  }
  .origin-head > img{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    width: 100%;
  }
  .origin-head > p:nth-child(2){
    position: relative;
    z-index: 1;
    font-size: 24px;
    color: #FFFFFF;
  }
  .origin-head > p:nth-child(3){
    position: relative;
    z-index: 2;
    margin-top: 2px;
    font-size: 16px;
    color: #FFFFFF;
  }
  .title{
    padding: 12px;
    font-size: 14px;
    line-height: 21px;
    color: #323233;
    text-align: left;
  }
  .hot-new{
    display: flex;
    flex-flow: row nowrap;
    padding-left: 12px;
    padding-right: 12px;
  }
  .hot-new > p{
    flex-grow: 1;
    text-align: center;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 14px;
    color: #323233;
    border-bottom: 2px solid #e6e6e6;
    cursor: pointer;
  }
  .hot-new > .active{
    color:#AC69FE;
    border-bottom: 2px solid #AC69FE;
  }
  .find-container{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 14px 12px 14px 12px;
  }
  .find-container > img{
    min-width: 170px;
    height: 125px;
    border-radius: 4px;
    background-color: #e8e8e8;
  }
  .find-info{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin-left: 12px;
    text-align: left;
  }
  .user-info{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 5px;
    align-items: center;
    text-align: left;
    padding-left: 0;
  }
  .user-info img{
    background-color: #e8e8e8;
    border-radius: 50%;
  }
  .user-info  div{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  .user-info  div > p:nth-child(2){
    margin-left: 8px;
    font-size: 12px;
    color: #4b494c;
    line-height: 12px;
  }
  .user-info  > p:nth-child(2){
    justify-items: flex-end;
    font-size: 12px;
    color: #7C7A7F;
    line-height: 12px;
  }
  hr{
    margin-left: 12px;
    margin-right: 12px;
    outline: none;
    border: none;
    border-top: 1px solid #999999;
  }
  .swiper-slide{
    margin-right: 12px;
    padding: 5px 12px 5px 12px;
    font-size: 12px;
    color: #323233;
    background-color: #e8e8e8;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
  }
  .tagActive{
    background-color: #ac69fe;
    color: white;
  }
  .route-container a{
    text-decoration: none;
    color:#4b494c
  }
</style>
<template>
  <div class="container">
    <div class="top-nav">
      <img src="../../img/hole_back.png" alt="" width="40" height="40" @click="back">
      <p>美修原创</p>
      <img src="../../img/more-icom.png" alt="" style="margin-right: 12px">
    </div>
    <div class="origin-head">
      <img :src="practiceData.xxsButton[0].image" alt="">
      <p>{{practiceData.xxsButton[0].title}}</p>
      <p>心得：{{originData.total}}</p>
    </div>
    <p class="title">
      {{practiceData.xxsButton[0].param.content}}
    </p>
    <div class="hot-new">
      <p v-bind:class="{active: isNew  }" @click="changItem(0)">最新</p>
      <p v-bind:class="{active: isHot }" @click="changItem(1)">最热</p>
    </div>
    <swiper :options="swiperOption" style="margin-top: 12px">
      <swiper-slide class="tagActive" @click="tagItem(0)" style="margin-left: 12px">精选</swiper-slide>
      <swiper-slide>
        <div @click="tagItem(1)">
          肤质死磕范
        </div>
      </swiper-slide>
      <swiper-slide>
      <div @click="tagItem(2)">
        不美白死星人
      </div>
      </swiper-slide>
      <swiper-slide>
        <div @click="tagItem(3)">
          洗刷刷洗刷刷
        </div>
      </swiper-slide>
      <swiper-slide>
        <div @click="tagItem(4)">
          抗痘抗敏侠
        </div>
      </swiper-slide>
      <swiper-slide>
        <div @click="tagItem(5)">
          种了一窝嫩草
        </div>
      </swiper-slide>
      <swiper-slide>
        <div @click="tagItem(6)">
          微整形品鉴会
        </div>
      </swiper-slide>
      <swiper-slide>
        <div @click="tagItem(7)">
          彩妆扮靓扒
        </div>
      </swiper-slide>
      <swiper-slide>
        <div @click="tagItem(8)">
          滚蛋吧谣言君
        </div>
      </swiper-slide>
      <swiper-slide>
        <div @click="tagItem(9)">
          修宝评测团
        </div>
      </swiper-slide>
      <swiper-slide>
        <div @click="tagItem(10)">
          安全Q&A
        </div>
      </swiper-slide>
    </swiper>

    <div v-for="item in findData" class="route-container">
    <router-link :to="{name : 'articleDetail',params : {id : item.id }}">
    <div class="find-container">
      <img :src="item.imageSrc" alt="" width="170" height="125">
      <div class="find-info">
         <p>{{item.title}}</p>
          <div class="user-info">
            <div v-if="item.baseInfo != null">
              <img :src="item.baseInfo.headimgurl" alt="" width="20" height="20">
              <p>{{item.baseInfo.nickname}}</p>
            </div>
            <div v-else>
              <img src="" alt="" width="20" height="20">
              <p></p>
            </div>
            <p>{{item.hit_num}}阅读</p>
          </div>
      </div>
    </div>
    <hr>
      </router-link>
    </div>
  </div>
</template>
<script>
  var axios = require('axios');
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default{
      data(){
          return{
              isNew:true,
              isHot:false,
              practiceData:{},
              originData:{},
              findData:[],
              sort_type:0,
              type:9,
              swiperOption: {
              width:100,
              notNextTick: true,
              direction : 'horizontal',
              autoHeight: true,
              observeParents:true,
              freeMode : true,
              slideToClickedSlide:true,
            }
          }
      },
    created(){
          this.fetchData();
    },
    methods:{
      changItem(index){
          if( index == 0){
              this.isNew = true;
              this.isHot = false;
          }else{
            this.isNew = false;
            this.isHot = true;
          }
          this.sort_type = index;
          this.fetchData();
      },
      tagItem(index){
          console.log(index)
          this.type = index;
          this.fetchData();
      },
      fetchData(){
//          如果修行社的数据请求过了，就从vuex中取
        if(JSON.stringify(this.$store.state.practiceData) == "{}"){
          axios.post('bevol/sns/index2', {},
            {
              headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
            })
            .then(function(response) {
              that.practiceData = response.data.result;
              that.$store.dispatch('practiceData', response.data.result);
            })
            .catch(function(error) {
              console.log(error)
            });
        }else{
          this.practiceData = this.$store.state.practiceData;
        }
        let that = this;
        axios.post('bevol/entity/list2/find?type='+that.type+'&sort_type='+that.sort_type+'&pager=1&pageSize=10&', {},
          {
            headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
          })
          .then(function(response) {
             that.originData = response.data;
             that.findData = response.data.result;
//            console.log("美修原创数据+++++++++++++++++++++++++++++"+JSON.stringify(response));
          })
          .catch(function(error) {
            console.log(error)
          });
      },
      back(){
        this.$router.go(-1);
      }
    }
  }
</script>
