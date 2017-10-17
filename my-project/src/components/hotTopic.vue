<template>
  <div class="container">
    <topbar>
      <p slot="title">热门话题</p>
      <img slot="right" src="" alt="" width="17" height="17" style="visibility: hidden">
    </topbar>

    <scroller :on-refresh="refresh"
              :on-infinite="infinite"
              ref="myscroller"
              style="padding-top: 44px;">
      <div v-for="item in hotTopicData">
        <router-link :to="{name:'hotTopicList',params:{id:item.id,descp:item.descp,imageSrc:item.imageSrc,topic:item.title}}">
          <div class="list-container" id="hot-list">
            <i><img :src="item.mini_imageSrc" alt="" class="product-img" width="64" height="64"></i>
            <div class="product-container">
              <p>{{item.title}}</p>
              <p>{{item.part_num}}人参与</p>
              <img id="forward" src="../img/hole_forward.png" alt="" width="8" height="15">
            </div>
          </div>
        </router-link>
      </div>
    </scroller>
  </div>
</template>

<script>
  import topbar from '../components/topBar'
  var jsonp = require('jsonp');
  export default {
    data () {
      return {
        hotTopicData: [],
        pager:1,
        noMore:false
      }
    },
    components: {
      topbar
    },
    mounted(){
        this.fetchData(1);
    },
    methods: {
      fetchData: function (pager) {
        var that = this;
        let url = encodeURI('http://api.bevol.cn/hotlist/list2?pager='+pager+'&pageSize=10');
        jsonp(url, null, function (err, data) {
          if (err) {
            console.error(err.message);
          } else {
              that.hotTopicData.push(...data.result);
          }
        });
      },
      refresh: function (done) {
        setTimeout(function () {
          done();
        }, 1500)
      },
      infinite:function (done) {
        var self = this;
        if(self.pager > 7){
          this.$refs.myscroller.finishInfinite(2);
        }else {
          setTimeout(function () {
              // TODO 请求了两次
            self.pager++;
            self.fetchData(self.pager);
            done();
          }, 1500)
        }
      },
      back()
      {
        window.history.go(-1);
      }
    }
  }
</script>

<style lang="css" scoped>
  * {
    text-align: left;
  }

  .container {
    width: 100%;
    height: 100vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
    padding-top: 35px;
  }

  .list-container {
    position: relative;
    padding: 12px;
    background-color: white;
  }

  #hot-list > i {
    display: inline-block;
    width: 64px;
    height: 64px;
    background-color: #e8e8e8;
  }

  #hot-list > i {
    vertical-align: middle;
  }

  .product-container {
    margin-left: 16px;
    display: inline-block;
    width: calc(100% - 124px);
    vertical-align: middle;
  }

  .product-container > p:nth-child(1) {
    font-size: 14px;
    color: #4C4B4C;
    line-height: 14px;
  }

  .product-container > p:nth-child(2) {
    margin-top: 12px;
    font-size: 12px;
    color: #656466;
    letter-spacing: 0;
    line-height: 12px;
  }

  .product-container article {
    margin-top: 11px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #676767;
    letter-spacing: 0;
  }

  .product-img {
    border-radius: 4px;
    width: 64px;
    height: 64px;
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

  .search-result-container > i {
    font-size: 36px;
    color: #4B494D;
  }

  .search-border > i {
    color: #D8D8D8;
    font-size: 16px;
  }

  .search-border input {
    color: #323233;
    outline: none;
    border: none;
    background-color: transparent;
  }

  #forward {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
  }
</style>


