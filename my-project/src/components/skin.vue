<style scoped>
  .container {
    background-color: #F5F5F5;
    padding: 0;
    margin: 0;
    margin-bottom: 54px;
  }

  #skin-container {
    width: 100%;
    margin-top: 44px;
  }

  .skin-test-intro {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    padding: 12px;
    width: 100%;
    height: 160px;
    text-align: left;
    background-image: url(../img/skin_manage_bg.png);
    background-size: cover;
  }

  .skin-test-intro p:nth-child(1) {
    color: white;
    font-size: 16px;
  }

  .skin-test-intro p:nth-child(2) {
    margin-top: 12px;
    color: white;
    font-size: 12px;
  }

  /*肤质测试信息*/
  .skin-module {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 12px;
    min-height: 300px;
    width: 100%;
    background-color: #F5F5F5;
  }

  .skin-module-item {
    margin-top: 12px;
    margin-left: 12px;
    padding: 19px 20px 20px 20px;
    width: calc(50% - 6px);
    list-style: none;
    background-color: white;
    box-shadow:0 0 4px 0 #dadada inset;
    text-align: center;
  }
  .skin-module-item img{
    background-color: transparent;
  }
  .skin-module li:nth-child(1), :nth-child(3) {
    margin-left: 0;
  }

  .skin-module li:nth-child(1), :nth-child(2) {
    margin-top: 0;
  }

  .skin-module-item p:nth-child(2) {
    margin-top: 3px;
    font-size: 14px;
    color: #323233;
    text-align: center;
  }

  .skin-module-item p:nth-child(3) {
    font-size: 12px;
    color: #323233;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-align: center;
  }

  .skin-module-item p:nth-child(4) {
    margin-top: 6px;
    font-size: 14px;
    color: #F8757E;
    text-align: center;
  }

  .check-skin {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 102px;
    height: 102px;
    border-radius: 50%;
    line-height: 102px;
    vertical-align: middle;
    background-color: #E1E1E1;
    border: 12px solid #F5F5F5;
    color: white;
    box-sizing: content-box;
  }
  .check-skin p{
    text-align: center;
  }
  /* 弹框 */
  .popup-container {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 910;
    width: 100vw;
    height: 100vh;
  }

  .popup-container::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: .7;
    background-color: #212121;
  }

  .bottom-popup {
    /*display: none;*/
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    background-color: white;
  }

  .bottom-popup p {
    margin-left: 12px;
    margin-right: 12px;
    padding: 12px 90px 12px 90px;
    color: #323233;
    font-size: 14px;
    text-align: center;
    border-bottom: 1px solid #E6E6E6;
  }

  .bottom-popup p:nth-child(1) {
    font-size: 12px;
  }

  .bottom-popup p:nth-child(2) {
    color: #F8757E;
  }
  .active {
    display: block;
  }
  .btnActive{
    background-color: #AC69FE;
  }
  /* 骨架屏 */
  .load-skin figure{
    margin:  0 auto;
    height: 48px;
    width: 48px;
    background-color: #e8e8e8;
  }
  .load-skin p{
    margin: 0 auto;
    width: 70px;
    height: 15px;
    background-color: #e8e8e8;
  }
  .load-skin p:nth-child(2){
    margin-top: 10px;
    width: 60px;
  }
  .load-skin p:nth-child(3){
    margin-top: 2px;
    width: 100px;
  }
</style>
<template>
  <div class="container">
    <topbar>
      <img slot="left" src="../img/hole_back.png" alt="" width="44" height="44" style="visibility: hidden">
      <p slot="title">肤质管理</p>
      <img slot="right" src="../img/search.png" alt="" width="17" height="17" style="visibility: hidden">
    </topbar>
    <div id="skin-container">
      <!--测试介绍-->
      <section class="skin-test-intro">
        <p>史上最长的肤质测试</p>
        <p>本肤质分类来自美国著名的皮肤科医生褒曼(Leslie<br>
          Baumann M.D.)所著的《The Skin Type Solution》，<br>
          得到全球皮肤可医生的广泛推荐和认可。
        </p>
      </section>
      <!--测试信息-->
      <ul class="skin-module">
        <li v-show="loaded" class="skin-module-item" v-for="(item,index) in skinData" @click="popupSort(index)">
        <img :src="item.image" alt="" width="48" height="48" onerror="onerror=null;src='http://iph.href.lu/48x48'">
        <p>{{item.title}}</p>
        <p>{{item.desc}}</p>
        <p>{{skin[index]}}</p>
      </li>
        <li v-show="!loaded" class="skin-module-item load-skin" v-for="item in 4">
          <figure></figure>
          <p></p>
          <p></p>
          <p></p>
        </li>

        <!-- 骨架end-->
        <div class="check-skin" v-bind:class="{btnActive:isBtnActive}" @click="toSkinManage">
          <p>查看肤质</p>
        </div>
      </ul>
    </div>
    <!--弹框-->
    <div class="popup-container" :class="{ active: isActive }" @click="hide">
      <div class="bottom-popup">
        <p>如果非常确定自己的肤质类型可以跳过测试，可以直接选择肤质类型</p>
        <p>进入测试（推荐）</p>
        <p v-for="(item,index) in sortData" @click="selectSkin(index)">
          {{item.sortName}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import  {mapState, mapActions} from 'vuex'
  import topbar from '../components/topBar'
  var jsonp = require('jsonp');
  export default{
    data(){
      return {
        loaded: false,
        isActive: false,
        isBtnActive:false,
        skinData: [],
        sortData: [],
        skin:["未测试","未测试","未测试","未测试"],  //存放肤质选择结果
        itemIndex:0,  //缓存肤质模块的当前索引
      }
    },
    created(){
      this.fetchData();
    },
    components: {
      topbar
    },
    methods: {
      fetchData(){
        var that = this;
        let url = encodeURI('http://api.bevol.cn/init7');
        jsonp(url, null, function (err, data) {
          if (err) {
            console.error(err.message);
          } else {
            that.skinData = data.result.skinlists;
            that.loaded = true;
            that.$store.dispatch('initData', data.result);
            console.log(data);
          }
        });
      },
      popupSort(index){
        this.isActive = true;
        this.itemIndex = index;
        let that = this;
        switch (index) {
          case 0:
            this.sortData = [{sortName: "重度干性皮肤"}, {sortName: "轻度干性皮肤"}, {sortName: "轻度油性皮肤"}, {sortName: "重度油性皮肤"}];
            that.isActive = true;
            break;
          case 1:
            this.sortData = [{sortName: "重度耐受皮肤"}, {sortName: "轻度耐受皮肤"}, {sortName: "轻度敏感皮肤"}, {sortName: "重度敏感皮肤"}];
            that.isActive = true;
            break;
          case 2:
            this.sortData = [{sortName: "非色素沉着性皮肤"}, {sortName: "色素沉着性皮肤"}];
            that.isActive = true;
            break;
          case 3:
            this.sortData = [{sortName: "紧致性皮肤"}, {sortName: "皱纹性皮肤"}];
            that.isActive = true;
            break;
        }
      },
      hide(){
          this.isActive = false;
      },
      selectSkin(index){
        let that = this;
          switch (index){
            case 0 :
                that.skin[that.itemIndex] =  that.sortData[index].sortName;
               break;
            case 1 :
              that.skin[that.itemIndex] =  that.sortData[index].sortName;
              break;
            case 2 :
              that.skin[that.itemIndex] =  that.sortData[index].sortName;
              break;
            case 3 :
              that.skin[that.itemIndex] =  that.sortData[index].sortName;
              break;
            default:
                break;
          }
  // 如果4个模块都选择了相应的肤质，就可以跳转到肤质管理
       let isGoCount = 0;
        for(let i=0 ;i<4;i++){
              if(that.skin[i] == "未测试"){
                  isGoCount += 1;
              }
        }
        if(isGoCount == 0 ){
            that.isBtnActive =true;
        }
  // end
      },
      toSkinManage(){
          if(this.isBtnActive){
              this.$router.push('skinManage');
          }else{
              return false;
          }
      }
    }
  }
</script>
