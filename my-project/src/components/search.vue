<style scoped>
  .search-container {
    padding: 7px 12px 7px 12px;
    border-bottom: 1px solid #D9D9D9;
    background-color: white;
  }

  .search {
    display: inline-block;
    width: 80%;
    padding: 6px;
    border-radius: 50px;
    background-color: #F5F5F5;
  }

  .search img {
    vertical-align: middle;
  }

  .search-container input {
    margin-left: 7px;
    width: 80%;
    outline: none;
    border: none;
    font-size: 12px;
    background-color: #F5F5F5;
  }

  #back {
    margin-left: 12px;
    font-size: 16px;
    color: #323233;
  }

  .hot-search {
    border: 1px solid #D9D9D9;
    background-color: white;
  }

  .hot-search-title {
    height: 44px;
    line-height: 44px;
    text-align: left;
    padding-left: 12px;
    font-size: 14px;
    color: #313033;
    border-bottom: 2px solid #D9D9D9;
  }

  .hot-search-tag {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    padding: 12px;
  }

  .tag {
    margin-left: 8px;
    margin-top: 8px;
    padding: 5px 12px 5px 12px;
    border-radius: 50px;
    border: 1px solid #D9D9D9;
    font-size: 14px;
    color: #323233;
  }

  .product-container a {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 5px 12px 5px 12px;
    /*border-bottom: 1px solid #D9D9D9;*/
    background-color: white;
  }

  .product-container hr {
    position: absolute;
    bottom: 0;
    left: 12px;
    width: calc(100% - 24px);
    outline: none;
    border: none;
    border-top: 1px solid #D9D9D9;
  }

  .product-container:last-child hr {
    display: none;
  }

  .product-container img {
    vertical-align: middle;
  }

  .product-container section {
    margin-left: 12px;
  }

  .product-container section p:nth-child(1) {
    font-size: 14px;
    color: #323233;
    line-height: 21px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-align: left;
  }

  .product-container section p:nth-child(2) {
    margin-top: 4px;
    font-size: 12px;
    color: #7E7D7F;
    line-height: 14px;
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  .composition-item {
    height: 44px;
    line-height: 44px;
    text-align: left;
    padding-left: 12px;
    font-size: 14px;
    color: #313033;
  }

  .resultActive {
    display: none;
  }
  /* 骨架屏 */
  .load-search{
    height: 24px;
    width: 38px;
    background-color: #e8e8e8;
  }
</style>
<template>
  <div class="container">
    <div class="search-container">
      <div class="search">
        <img src="../img/search.png" alt="">
        <input ref="searchMain" type="search" @keyup.13="search($event)" placeholder="查询50万种化妆品、5万种成分及心得">
      </div>
      <span id="back" @click="back">取消</span>
    </div>
    <!--热门搜索-->
    <div class="hot-search" v-bind:class="{ resultActive: !clickTag }">
      <p class="hot-search-title">热门搜索</p>
      <div class="hot-search-tag">
        <div v-show="tagData.length != 0" class="tag" v-for="item in tagData" @click="tagSearch($event)">
          {{item.name}}
        </div>
        <div v-show="!(tagData.length != 0)" class="tag load-search" v-for="item in 10">
        </div>
      </div>
    </div>

    <div v-bind:class="{ resultActive: clickTag }">
      <!--产品-->
      <div class="hot-search">
        <p class="hot-search-title">产品</p>
        <div class="product-container" v-for="item in searchResultData">
          <router-link
            :to="{name:'productDetail',params: { id: item.id,name : item.title, alias:item.alias , price : item.price ,imgSrc : item.imageSrc}}">
            <img :src="item.imageSrc" alt="" width="60" height="60">
            <section>
              <p>{{item.title}}</p>
              <p>{{item.alias}}</p>
            </section>
            <hr>
          </router-link>
        </div>
      </div>

      <!--成分-->
      <div class="hot-search">
        <p class="hot-search-title">成分</p>
        <div class="product-container" v-for="item in compositionData">
          <p class="composition-item">{{item.name}}</p>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  var jsonp = require('jsonp');
  export  default{
    data(){
      return {
        tagData: [],
        searchResultData: [],
        compositionData: [],
        clickTag: true
      }
    },
    created(){
      this.fetchData();
    },
    methods: {
      fetchData: function () {
        let initData = this.$store.state.initData;
        if (initData.length != 0) {
          this.tagData = initData.hotKeyWords;
        } else {
          let that = this;
          let url = encodeURI('http://api.bevol.cn/init7');
          jsonp(url, null, function (err, data) {
            if (err) {
              console.error(err.message);
            } else {
              that.tagData = data.result.hotKeyWords;
              console.log(data);
            }
          });
        }
      },
      tagSearch(event){
          console.log(1111111111111111111111);
        let tagValue = event.currentTarget.innerText;
        this.$refs.searchMain.value = tagValue;
        let that = this;
        let url = encodeURI('http://search.bevol.cn/index/list?pager=1&pager=3&keywords=' + tagValue + '');
        jsonp(url, null, function (err, data) {
          if (err) {
            console.error(err.message);
          } else {
            that.searchResultData = data.result.goods.items;
            that.compositionData = data.result.compostion.items;
            that.clickTag = false;
            console.log(that.compositionData);
          }
        });
      },
      back(){
        window.history.go(-1);
      },
      search:function(){
        let userSearch = this.$refs.searchMain.value;
//            alert(userSearch)
          this.$router.push({path:'/SearchProduct',query:{keywords:userSearch}});
      }
    }
  }
</script>
