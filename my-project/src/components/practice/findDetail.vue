<style scoped>
  .container{
    text-align: left;
    background-color: #F5F5F5;
  }
  .container > img{
    margin-top: 44px;
    background-color: #e8e8e8;
  }
  .find-detail{
    margin-top: -8px;
    padding: 12px;
    background-color: white;
  }
  .find-detail > h1{
    margin-top: 10px;
    font-size: 18px;
    font-weight: 400;
  }
  .find-detail > span{
    color: #AFACB3;
    font-size: 12px;
  }
  /*标签*/
  .tag-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    padding-right: 12px;
  }
  .tag-container li{
    margin-top: 10px;
    margin-right: 10px;
    list-style: none;
    padding: 5px 12px 5px 12px;
    background-color: #f4f4f4;
    border-radius: 8px;
    color: #7D7A7F;
    font-size: 11px;
  }
  .tag-container li:first-child{
    margin-left: 0;
  }
/*用户信息*/
.user-info{
  margin-top: 20px;
  padding: 0 12px 12px 12px;
  background-color: white;
}
.user-info img,article{
  display: inline-block;
  vertical-align: top;
}
.user-info > img{
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
  .main-img{
    width: 100%;
  }
  .main-article{
    line-height: 26px;
    font-size: 14px;
    color: #4B494C;
    text-indent: 2em;
    white-space: pre-wrap;
  }
  .main-product{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 2px 12px 2px 12px;
    border: 1px solid #F0F0F0;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.09);
  }
  .main-product section{
    margin-left: 10px;
  }
  .main-product section h2{
    font-size: 16px;
    color: #4B4A4D;
    font-weight: 400;
  }
  .main-product section p{
    margin-top: 5px;
    font-size: 12px;
    color: #7C7A7F;
  }
  .created-time{
    margin-top: 20px;
    color: #AFACB3;
    font-size: 12px;
    text-align: right;
  }
  .comment-num{
    margin-top: 8px;
    text-align: center;
    font-size: 16px;
    color: #4B494C;
    line-height: 44px;
    border-top: 1px solid #D9D9D9;
    background-color: white;
  }
  .hot-comment{
    padding-left: 9px;
    text-align: left;
    border-left: 4px solid #AC69FE;
    font-size: 12px;
    color: #323133;
    background-color: white;
  }

</style>
<template>
<div class="container">
  <topbar>
    <p slot="title">心得详情</p>
    <img slot="right" src="./../../img/more-icom.png" alt="">
  </topbar>
  <img :src="findData.imgSrc" alt="" width="100%">
  <div class="find-detail">
    <h1>{{findData.title}}</h1>
    <span>{{findData.hitNum}}阅读 | {{findData.commentNum}}评论</span>
    <ul class="tag-container">
      <li v-for="item in findData.tags">{{tag(item)}}</li>
    </ul>
    <div class="user-info">
      <img :src="findData.userBaseInfo.headimgurl" alt="" width="40" height="40" onerror="onerror=null;src='http://iph.href.lu/40x40'">
      <article>
        <p>{{findData.userBaseInfo.nickname}}</p>
        <p>{{skin()}}</p>
      </article>
    </div>
    <!--正文-->
    <div v-for="item in findData.userPartDetails">
       <div v-if="item.type==1" class="main-product">
         <img :src="item.imgSrc" alt="" width="86" height="86">
         <section>
           <h2>{{item.title}}</h2>
           <p>{{item.alias}}</p>
         </section>
       </div>
       <div v-else-if="item.type==2" class="main-article">
         {{item.content}}
       </div>
       <div v-else-if="item.type==3">
         <img class="main-img" :src="item.imgSrc" alt="">
       </div>
    </div>
    <p class="created-time">发布于：{{timeComputed()}}</p>
  </div>
   <p class="comment-num">评论（{{findData.commentNum}}）</p>
   <p class="hot-comment">热门评论</p>
  <comment :comment-data = "commentData" style="margin-bottom: 35px"></comment>
  <bottmShare>
    <div slot="top"></div>
  </bottmShare>
</div>
</template>
<script>
  import topbar from '../../components/topBar'
  import bottmShare from '../../components/bottmShare.vue'
  import comment from '../../components/common/comment.vue'
  var axios = require('axios');
  var jsonp = require('jsonp');
  export  default{
      data(){
          return{
            findData:{},
            commentData:[]
        }
      },
    components:{
      topbar,
      bottmShare,
      comment,
    },
    created(){
          this.fetchData();
    },
    activated(){
          window.scrollTo(0,0);
          this.fetchData();
    },
    methods:{
          fetchData(){
//              文章数据
              let that = this;
              let id = this.$route.params.id;
            axios.post('bevol/user_part/detail/lists?id='+id+'', {},
              {
                headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
              })
              .then(function(response) {
                that.findData = response.data.result;
              })
              .catch(function(error) {
                console.log(error)
              });
//            评论数据
            let url = encodeURI('http://api.bevol.cn/entity/comment5/lists/user_part_lists?id='+id+'&pager=1&pageSize=20&type=1');
            jsonp(url, null, function (err, data) {
              if (err) {
                console.error(err.message);
              } else {
                that.commentData = data.result.hotList;
                console.log("++++++++++++++++++评论数据"+that.commentData)
              }
            });
          },
          tag(index){
              switch (index){
                case 233:
                    return "红扑扑敏感流"
                  break;
                case 235:
                    return "白成一条闪电";
                  break;
                case 236:
                    return "不防晒，都得死"
                case 240:
                    return "保湿"
                  break;
                case 241:
                  return "精华"
                  break;
                case 309:
                  return "彩妆";
                  break;
                case 319:
                    return "个人护理";
                  break;
                case 320:
                    return "肤质";
                  break;
                case 318:
                    return "我要上精选";
                  break;
                case 237:
                    return "种草拔草小能手";
                  break;
                default:
                    return "暂无";
                    break;
              }
          },
      skin: function () {
//            将取出的肤质标签子母分割拼成真正的肤质标签
        let tag = this.findData.userBaseInfo.skinResults;
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
      },
      formatDate: function (date) {
//          时间格式化
        if(date ==0){
          return 0;
        }else {
          let dates;
          dates = dates + "";
          dates = date.split("/");
          if (dates.length == 3) {
            if (dates[1].length == 1) {
              dates[1] = "0" + dates[1];
            }
            if (dates[2].length == 1) {
              dates[2] = "0" + dates[2];
            }
            date = dates.join("-");
            return date;
          } else {
            return null;
          }
        }
      },
      timeComputed: function () {
        let createStamp = this.findData.createStamp;
        let createTime = new Date(parseInt(createStamp) * 1000).toLocaleDateString();
        let formatTime = this.formatDate(createTime);
        return formatTime;
      }
    }
  }
</script>
