<style>
  *{
    margin: 0;
    padding: 0;
  }
  .container {
    background-color: #F5F5F5;
  }
  .tabs {
    margin-top: 4px;
    background-color: white!important;
    border-bottom: 1px solid #F5F5F5;
  }
  .tabs-title {
    color: #313233;
  }
  .bottom-line {
    background-color: #AC69FE!important;
  }

  /*成分分析*/
  .com-analysis {
    height: 166px;
    padding: 15px 38px 18px 38px;
    background-color: white;
  }

  #record {
    font-size: 12px;
    color: #7C797F;
    text-align: center;
  }

  #record a {
    text-decoration: none;
    color: #AC69FE;
    text-align: center;
  }

  .composition-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    margin-top: 12px;
    width: 100%;
    height: 18px;
  }

  .composition-container div:nth-child(1) {
    position: absolute;
    left: 38px;
    z-index: 0;
    /*width: calc(60% + 15px);*/
    width: calc(100% - 76px);
    height: 18px;
    background-color: #87C67D;
    border-radius: 50px;
  }

  .composition-container div:nth-child(2) {
    position: relative;
    z-index: 1;
    margin-right: -10px;
    /*width: calc(30% + 15px);*/
    height: 100%;
    background-color: #F7CC36;
    border-radius: 50px;
  }

  .composition-container div:nth-child(3) {
    position: relative;
    z-index: 2;
    width: 10%;
    height: 100%;
    background-color: #FF7972;
    border-radius: 50px;
  }

  .composition-intro {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-top: 12px;
    width: 100%;
    height: 18px;
  }

  .composition-intro > div p, img {
    display: inline-block;
    vertical-align: middle;
  }

  .composition-intro > div p {
    margin-left: 6px;
    font-size: 12px;
    color: #323233;
  }

  .composition-intro > div:nth-child(1) p {
    color: #87C67D;
  }

  .composition-intro > div:nth-child(2) p {
    color: #F7CC36;
  }

  .composition-intro > div:nth-child(3) p {
    color: #FF574F;
  }

  .check-comp {
    margin: 23px auto;
    width: 143px;
    padding: 5px 12px 5px 12px;
    border: 1px solid #AC69FE;
    border-radius: 3px;
    font-size: 13px;
    color: #AC69FE;
    letter-spacing: 1px;
  }

  /*安全说，功效说*/
  .comp-item-second {
    height: 166px;
    padding: 16px 12px 16px 12px;
    background-color: white;
  }

  .comp-item-second > p:nth-child(1) {
    text-align: center;
  }

  .flex-container {
    display: flex;
    flex-flow: row wrap;
    margin-top: 17px;
  }

  .flex-container p {
    margin-left: 12px;
    width: calc(50% - 6px);
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #F8F8F8;
    text-align: center;
    font-size: 14px;
    color: #323233;
  }

  .flex-container p:nth-child(3), p:nth-child(4) {
    margin-top: 12px;
  }

  .flex-container p:nth-child(1), p:nth-child(3) {
    margin-left: 0;
  }

  /*肤质匹配*/
  .comp-item-four {
    height: 166px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background-color: white;
  }

  .comp-item-four p {
    width: 200px;
    padding: 10px 0 10px 0;
    font-size: 14px;
    color: #323233;
    text-align: center;
    background-color: #F8F8F8;
  }

  .comp-item-four p:nth-child(2) {
    margin-top: 12px;
  }

  .product-detail {
    margin-top: 44px;
    display: flex;
    flex-flow: row nowrap;
    padding: 16px 12px 16px 12px;
    background-color: white;
  }

  .product-detail-intro {
    flex-grow: 1;
    margin-left: 12px;
    text-align: left;
  }

  .product-detail-intro p:nth-child(1) {
    font-size: 15px;
    color: #313033;
    line-height: 22px;
  }

  .product-detail-intro p:nth-child(2) {
    margin-top: 2px;
    font-size: 12px;
    color: #313033;
    line-height: 18px;
  }

  .product-detail-intro p:nth-child(3) {
    margin-top: 2px;
    font-size: 12px;
    color: #959199;
    line-height: 18px;
  }

  .product-detail-intro p:nth-child(4) {
    display: inline-block;
    font-size: 12px;
    color: #676767;
    letter-spacing: 0;
  }
  .mention-user-part {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    height: 44px;
    margin-top: 4px;
    background-color: white;
    border-bottom: 2px solid #F5F5F5;
  }

  .mention-user-part p {
    font-size: 15px;
    color: #323133;
  }

  .mention-user-part img {
    margin-left: 5px;
    width: 18px;
    height: 18px;
  }

  /*评论*/
  .comment-container {
    margin-top: 4px;
  }

  .comment-title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 12px;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #D9D9D9;
  }

  .comment-title p {
    font-size: 15px;
    color: #4B494C;
  }

  .comment-title > div p, img {
    display: inline-block;
  }

  .comment-title > div p {
    font-size: 12px;
    color: #AC69FE;
  }

  .hot-comment {
    padding: 0 12px 0 12px;
    font-size: 12px;
    color: #323133;
    border-left: 2px solid #AC69FE;
    text-align: left;
    background-color: white;
  }

  .comment-main {
    padding-top: 6px;
    background-color: white;
  }

  /* 骨架屏 */
  .load-img {
    background-color: #e8e8e8;
  }

  .load-p > p:nth-child(1) {
    height: 20px;
    background-color: #e8e8e8;
  }

  .load-p > p:nth-child(2) {
    margin-top: 15px;
    width: 70%;
    height: 20px;
    background-color: #e8e8e8;
  }

  .load-p > p:nth-child(3) {
    margin-top: 10px;
    width: 30%;
    height: 15px;
    background-color: #e8e8e8;
  }

  .load-p > p:nth-child(4) {
    width: 50%;
    height: 15px;
    background-color: #e8e8e8;
  }
  .flex-container  .font-active{
    color: #ac69fe;
  }
  /* 评论骨架屏 */
  .comment-shell-container{
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .comment-shell-container > div{
    margin-left: 12px;
    margin-top: 12px;
    width: 40px;
    height: 40px;
    background-color: #e8e8e8;
    border-radius: 50%;
  }
  .comment-shell-container > section{
    margin-left: 8px;
  }
  .comment-shell-container > section > p:nth-child(1){
    margin-top: 15px;
    width: 108px;
    height: 20px;
    background-color: #e8e8e8;
  }
  .comment-shell-container > section > p:nth-child(2){
    margin-top: 5px;
    width: 128px;
    height: 16px;
    background-color: #e8e8e8;
  }
  .comment-shell-container > p{
    position: absolute;
    top: 15px;
    right: 12px;
    width: 50px;
    height: 17px;
    background-color: #e8e8e8;
  }
  #shell-star{
    margin-left: 67px;
    margin-top: 8px;
    width: 80px;
    height: 14px;
    background-color: #e8e8e8;
  }
  #shell-content{
    margin-top: 10px;
    margin-left: 60px;
    width: 70%;
    height: 63px;
    background-color: #e8e8e8;
  }
</style>
<template>
  <div class="container">
    <topbar>
      <p slot="title">产品详情</p>
      <img slot="right" src="./../img/more-icom.png" alt="" width="17" height="17">
    </topbar>
    <div v-show="productInfo.title" class="product-detail">
      <img :src="$route.params.imgSrc" alt="" width="120" height="120"
           onerror="onerror=null;src='http://iph.href.lu/120x120'">
      <div class="product-detail-intro">
        <p>{{productInfo.title}}</p>
        <p>{{productInfo.alias}}</p>
        <p>参考价格：¥{{productInfo.price}}/{{productInfo.capacity}}</p>
        <p>用户评分：</p>
        <star :star-count="starCount"></star>
      </div>
    </div>
    <!--产品信息骨架屏-->
    <div v-show="!productInfo.title" class="product-detail">
      <img src="" alt="" width="120" height="120" class="load-img">
      <div class="product-detail-intro load-p">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
    <!-- 骨架屏end-->
    <mu-tabs :value="activeTab" @change="handleTabChange" class="tabs" lineClass="bottom-line">
      <mu-tab value="tab1" title="成分分析" titleClass="tabs-title"/>
      <mu-tab value="tab2" title="安全说" titleClass="tabs-title"/>
      <mu-tab value="tab3" title="功效说" titleClass="tabs-title"/>
      <mu-tab value="tab4" title="肤质匹配" titleClass="tabs-title"/>
    </mu-tabs>
    <div v-if="activeTab === 'tab1'" class="com-analysis">
      <p id="record">本商品的成分来自该商品的<a>{{dataTypeStr}}</a></p>
      <div class="composition-container">
        <div></div>
        <div :style="'width:' + warnWidth + '%;'"></div>
        <div :style="'width:' + dangerWidth + '%;'"></div>
      </div>
      <div class="composition-intro">
        <div>
          <img src="../img/comp-safe.png" alt="">
          <p>较安全成分</p>
        </div>
        <div>
          <img src="../img/comp-warn.png" alt="">
          <p>有风险成分</p>
        </div>
        <div>
          <img src="../img/comp-danger.png" alt="">
          <p>危险成分</p>
        </div>
      </div>
      <div class="check-comp">
        查看全部{{compositionData.length}}种成分
      </div>
    </div>
    <!--安全说-->
    <div v-if="activeTab === 'tab2'">
      <div class="comp-item-second">
        <p>安全指数：<span> <star :star-count="parseInt(safeData[0].num)"></star> </span></p>
        <div class="flex-container">
          <p>{{safeData[1].name}}：<span class="font-active">{{safeData[1].num}}种</span></p>
          <p>{{safeData[2].name}}：<span class="font-active">{{safeData[2].num}}种</span></p>
          <p>{{safeData[3].name}}：<span class="font-active">{{safeData[3].num}}种</span></p>
          <p>{{safeData[4].name}}：<span class="font-active">{{safeData[4].num}}种</span></p>
        </div>
      </div>
    </div>
    <div v-if="activeTab === 'tab3'">
      <div class="comp-item-second">
        <div v-if="effectData.length < 3" class="flex-container">
          <p v-for="item in effectData">{{item.name == null ? "主要功效成分" : item.name}}：{{item.num}}种</p>
        </div>
        <div v-else class="flex-container">
          <p>主要功效成分：<span class="font-active">{{effectData[0].num}}种</span></p>
          <p>{{effectData[1].name}}：<span class="font-active">{{effectData[1].num}}种</span></p>
          <p>{{effectData[2].name}}：<span class="font-active">{{effectData[2].num}}种</span></p>
          <p class="font-active">查看全部功效成分</p>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'tab4'">
      <div class="comp-item-four">
        <p>适合我的肤质：<span class="font-active">14种</span></p>
        <p>不适合我的肤质：<span class="font-active">8种</span></p>
      </div>
    </div>

    <!--<div class="mention-user-part">-->
      <!--<span>提到该产品的心得</span>-->
      <!--<img src="../img/home_into.png" alt="">-->
    <!--</div>-->

    <div class="comment-container">
      <div class="comment-title">
        <p>评论({{commentTotal}})</p>
        <div>
          <p>同肤质评论</p>
          <img src="../img/skin_guid_forward.png" alt="" width="9" height="9">
        </div>
      </div>
      <div class="comment-main">
        <p class="hot-comment">热门评论</p>
        <comment v-show="commentData.length != 0" :comment-data="commentData"></comment>
        <!-- 评论骨架屏 -->
        <div v-show="commentData.length == 0">
         <div class="comment-shell-container">
              <div></div>
              <section>
                <p></p>
                <p></p>
              </section>
              <p></p>
         </div>
         <div id="shell-star"></div>
         <div id="shell-content"></div>
        </div>
        <!-- end -->
      </div>
    </div>
    <bottmShare></bottmShare>
  </div>
</template>

<script>
  import topbar from '../components/topBar'
  import bottmShare from '../components/bottmShare.vue'
  import comment from '../components/common/comment.vue'
  import star from '../components/common/star.vue'
  import qs from 'qs';
  var axios = require('axios');
  var jsonp = require('jsonp');
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  export default {
    data () {
      return {
        activeTab: 'tab1',
        commentTotal: '',
        commentData: [],
        productInfo: {},
        starCount: 0,
        compositionData: [],
        safeData:[],
        effectData:[],
        compCount: {},
        warnWidth:0,
        dangerWidth:0,
        dataTypeStr:''
      }
    },
    mounted(){
      this.fetchData();
    },
    activated(){
      this.fetchData();
    },
    deactivated(){
      this.productInfo = {};
      this.commentData = [];
    },
    components: {
      bottmShare,
      topbar,
      comment,
      star
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
      fetchData: function () {
        let id = this.$route.params.id; //获取产品搜索列表页传过来的id
        let that = this;
        let url = encodeURI('http://api.bevol.cn/entity/comment5/lists/goods?id=' + id + '&pager=1&pageSize=20&type=1');
        jsonp(url, null, function (err, data) {
          if (err) {
            console.error(err.message);
          } else {
            that.commentTotal = data.result.total;
            that.commentData = data.result.hotList;
          }
        });
        //首页精选点评传过来一个keywords,用产品搜索接口搜索出产品详细信息
        //x-www-form-urlencoded post的请求的参数仍然是跟在url后面,application/json则是传完整的json
        let keywords = this.$route.params.name;
        axios.post('api/goods/index3?keywords=' + keywords + '',
          {},
          {headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}})
          .then(function (response) {
            //用mid请求成分数据
            let mid = response.data.data.items[0].mid;
            axios.post('bevol/goods/info/' + mid + '',
              {},
              {headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}})
              .then(function (response) {
                that.dataTypeStr = response.data.result.goods.dataTypeStr;
                that.compositionData = response.data.result.composition;
                that.safeData = response.data.result.safety;
                that.effectData = response.data.result.effect;
                that.compAnaly(response.data.result.composition);
              })
              .catch(function (error) {
                console.log(error);
              });
//              成分数据end
            that.productInfo = response.data.data.items[0];
            that.starCount = parseInt(that.productInfo.grade);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      compAnaly(arr){
//              根据成分数组得到安全成分，风险成分，危险成分的数量
        let safeFlag = 0,
            warnFlag = 0,
            dangerFlag = 0;
        let arrLength = arr.length;
        arr.forEach(function (value) {
          if (parseInt(value.safety) < 3) {
            safeFlag++;
          } else if (parseInt(value.safety) < 7 && parseInt(value.safety) > 2) {
            warnFlag++;
          } else if (parseInt(value.safety) < 11 && parseInt(value.safety) > 6) {
            dangerFlag++;
          } else {
            safeFlag++;
          }
        });
        this.warnWidth = Math.ceil( (warnFlag / arrLength) * 100 );
        this.dangerWidth = Math.ceil( (dangerFlag / arrLength) * 100 );
      }
    }
  }
</script>


