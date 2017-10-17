<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .container {
    margin-bottom: 50px;
  }

  .comment-container {
    padding: 12px;
    background-color: white;
    text-align: left;
    margin-top: 0;
  }

  .user-info {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .user-info > section {
    margin-left: 12px;
  }

  .comment-time {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 12px;
    color: #BCB8BF;
  }

  .user-info > img {
    border-radius: 50%;
  }

  .user-info > section p:nth-child(1) {
    font-size: 15px;
    color: #4B4A4C;
    letter-spacing: 0;
  }

  .user-info > section p:nth-child(2) {
    margin-top: 1px;
    font-size: 11px;
    color: #7D7A7F;
  }

  .comment {
    margin-top: 9px;
    padding-left: 52px;
    font-size: 14px;
    color: #323133;
    letter-spacing: 0;
    line-height: 21px;
  }

  .good-count {
    margin-top: 13px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
  }

  .good-count p {
    margin-left: 5px;
    font-size: 12px;
    color: #B1AFB3;
  }

  hr {
    margin-top: 24px;
    margin-left: 52px;
    outline: none;
    border: none;
    border-top: 1px solid #D9D9D9;
  }
</style>
<template>
  <div class="container">
    <div class="comment-container" v-for="(item,index) in commentData">
      <div class="user-info">
        <img :src="item.userInfo.headimgurl" alt="" width="40" height="40">
        <section>
          <p>{{item.userInfo.nickname}}</p>
          <p>{{skin(index)}}</p>
        </section>
        <p class="comment-time">{{timeComputed(index)}}</p>
      </div>
      <p class="comment">
        {{item.content}}
      </p>
      <div class="good-count">
        <img src="../../img/product_detail_good.png" alt="">
        <p>{{item.likeNum}}</p>
      </div>
      <hr>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {}
    },
    props: {
      commentData: Array
    },
    computed: {},
    methods: {
      skin: function (index) {
//            将取出的肤质标签子母分割拼成真正的肤质标签
        let tag = this.commentData[index].skinResults;
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
      timeComputed: function (index) {
        let createStamp = this.commentData[index].createStamp;
        let createTime = new Date(parseInt(createStamp) * 1000).toLocaleDateString();
        let formatTime = this.formatDate(createTime);
        return formatTime;
      }
    }
  }
</script>
