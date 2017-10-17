<template>
  <div class="demo-infinite-container" id="padding-top">
    <!--搜索框-->
    <div class="fix-top">
    <div class="search-result-container">
      <img src="../img/hole_back.png" alt="" width="44" height="44" v-on:click="back">
      <div class="search-border">
        <i><img src="../img/search.png" alt="" width="14" height="14" style="vertical-align: middle"></i>
        <input ref="searchWords" placeholder="搜索50万种化妆品的安全和功效" type="search">
       </div>
    </div>
    <!--<ul class="choose-container">-->
      <!--<li>-->
        <!--<span>综合</span> <i class="fa fa-caret-down" aria-hidden="true"></i>-->
      <!--</li>-->
      <!--<li>-->
        <!--<span>评分</span>-->
        <!--<i>-->
          <!--<div style="height: 10px"><i class="fa fa-caret-up" aria-hidden="true"></i></div>-->
          <!--<div><i class="fa fa-caret-down" aria-hidden="true"></i></div>-->
        <!--</i>-->
      <!--</li>-->
      <!--<li>-->
        <!--<span>分类</span> <i class="fa fa-caret-down" aria-hidden="true"></i>-->
      <!--</li>-->
      <!--<li>-->
        <!--<span>成分筛选</span> <i class="fa fa-filter" aria-hidden="true"></i>-->
      <!--</li>-->
    <!--</ul>-->
    </div>
    <!--end-->

    <mu-list>
      <template v-for="item in productData">
        <router-link :to="{name:'productDetail',params: { id: item.id,name : item.title, alias:item.alias , price : item.price ,imgSrc : item.imageSrc}}">
        <div class="list-container">
          <i><img :src="item.imageSrc" alt="" class="product-img" width="100" height="100" rel="noreferrer"></i>

          <div class="product-container">
            <p>{{item.title}}</p>
            <article>
              <span> <star :star-count="parseInt(item.grade)"></star> </span>
              <span>{{item.comment_num}}评分</span>
            </article>
            <div class="product_price">
              <span>参考价：￥{{item.price}}/150ml</span>
              <span class="safe-chip">
                 安全{{item.grade}}分
              </span>
            </div>
          </div>
        </div>
        </router-link>
        <mu-divider style="padding-left: 120px"/>
      </template>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>

<script>
  var jsonp = require('jsonp');
  import star from '../components/common/star.vue'
  export default {
    data () {
      return {
        loading: false,
        scroller: null,
        productData:[],
        test:"",
        row : 10,
        searchWords:'',
        count:0,
      }
    },
    components:{
      star
    },
    mounted () {
      this.scroller = this.$el;
//      等vue实例挂载完成，生成虚拟dom的时候绑定数据
      this.$refs.searchWords.value = this.searchWords;
    },
    created(){
      this.fetchData(this.row);
    },
    activated(){
      // 组件被缓存的情况下，当组件要更新时使用activated钩子
      let that = this;
      let sortId = this.$route.params.sort?this.$route.params.sort:"";
      let keywords = this.$route.query.keywords?this.$route.query.keywords:"";
      //根据分类id和关键词搜索，当分类id和关键词都没有时，不请求数据，缓存产品列表组件
      if(sortId != "" || keywords != "") {
        this.fetchData(this.row, sortId, keywords);
      }
      // nextTick的回调函数在dom渲染完成后执行，activated钩子执行时dom并未渲染完成
      this.$nextTick(function () {
        this.$refs.searchWords.value = this.searchWords;
      })
    },
    methods: {
      loadMore () {
        this.loading = true;
        setTimeout(() => {
          this.row += 10;
          let sortId = this.$route.params.sort?this.$route.params.sort:"";
          let keywords = this.$route.query.keywords?this.$route.query.keywords:"";
          this.fetchData(this.row, sortId, keywords);
          this.loading = false
        },500);
      },
      fetchData:function (row,sortId,keywords) {
        let that =this;
        this.searchWords = keywords;
         let url= encodeURI('https://api.bevol.cn/search/goods/index3?category='+sortId+'&cps=4&rows='+row+'&keywords='+keywords+'');
        jsonp(url,null, function (err, data) {
          if (err) {
            console.error(err.message);
          } else {
            that.productData = data.data.items;
            console.log(that.productData);
          }
        });
      },
      back(){
        window.history.go(-1);
        this.productData = [];
      }
    }
  }
</script>

<style lang="css">
  *{
    text-align: left;
  }
  .demo-infinite-container{
    width: 100%;
    height: 100vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
  }
  #padding-top{
    padding-top: 56px;
    /*padding-top: 110px;*/
  }
  .demo-infinite-container .list-container{
    padding: 12px;
    background-color: white;
  }
  .demo-infinite-container .list-container > i{
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: #e8e8e8;
  }
  .product-container{
    margin-left: 12px;
    display: inline-block;
    width: calc(100% - 124px);
    vertical-align: top;
  }
  .product-container > p{
    font-family: PingFang-SC-Regular;
    font-size: 14px;
    color: #4B494D;
    letter-spacing: 0;
    line-height: 15px;
    font-weight: 600;
  }
  .product-container article{
    margin-top: 11px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #676767;
    letter-spacing: 0;
  }
  .product_price{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    margin-top: 11px;
  }
  .product_price > span{
    font-size: 12px;
    color: #a4a4a4;
  }
  .product_price .safe-chip{
    width: auto;
    border: 1px solid #87C67D;
    color: #87C67D;
    border-radius: 4px;
    padding: 2px 10px 2px 10px;
    font-size: 10px;
    letter-spacing: 1px;
  }
  .product-img{
    border-radius: 4px;
    width: 100px;
    height: 100px;
  }
  .choose-container{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #E8E8E8;
    background-color: white;
  }
  .choose-container li {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    list-style: none;
    align-items: center;
    /*text-align: center;*/
  }
  .choose-container li > i {
    margin-left: 5px;
  }

  .search-result-container{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 7px 12px 7px 12px;
    border-bottom: 1px solid #E8E8E8;
    background-color: white;
  }
  .search-result-container > i{
    font-size: 36px;
    color: #4B494D;
  }
  .search-border{
    flex-grow: 2;
    padding: 6px 8px 6px 18px;
    background-color: #F5F5F5;
    border-radius: 100px;
  }
  .search-border > i{
    color:#D8D8D8;
    font-size: 16px;
  }
  .search-border input{
    width: 70%;
    font-size: 12px;
    color: #323233;
    outline: none;
    border: none;
    background-color: transparent;
  }
  .fix-top{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
  }
</style>


