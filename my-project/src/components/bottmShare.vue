<style scoped>
  .container{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 999;
    width: 100%;
    background-color: white;
  }
  .footer-container{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    background-color: white;
  }
  .icon-button{
    position: relative;
    flex-grow:1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding-top: 14px;
    padding-bottom: 14px;
    border-top: 1px solid #F5F5F5;
  }
  .icon-button p{
    margin-left: 7px;
    font-size: 14px;
    color: #4B494C;
    line-height: 22px;
  }
  #issue{
    background-color: #AC69FE;
  }
  #issue p{
    color: white;
  }
  .line{
    position: absolute;
    right: 0;
    top: 50%;
    width:1px;
    height: 25px;
    background-color: #dcdcdc;
    transform: translateY(-50%);
  }
  .like-dislike{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: absolute;
    left:calc(100% - 163px);
    top: -65px;
    width: 155px;
    height: 60px;
    border-radius: 8px;
    background-image: url(../img/message_border.png);
    background-size: cover;
  }
  .like{
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
  .like p{
    margin-left: 7px;
    font-size: 12px;
    color: #4B494C;
  }
</style>
<template>
    <div class="container">
      <div class="like-dislike">
             <div class="like">
               <img src="../img/my_heart.png" alt="" width="20" height="20">
               <p>心碎</p>
               <div class="line"></div>
             </div>
            <div class="like">
              <img src="../img/hot_detail_dislike.png" alt="" width="20" height="20">
              <p>心碎</p>
            </div>
      </div>
      <div class="footer-container">
        <div class="icon-button">
          <img src="../img/my_like.png" alt="" width="18" height="18">
          <p>收藏</p>
          <div class="line"></div>
        </div>
        <div class="icon-button">
          <img src="../img/share.png" alt="" width="18" height="18">
          <p>分享</p>
        </div>
        <div class="icon-button" id="issue" >
          <img src="../img/Shape.png" alt="">
          <p>发布评论</p>
        </div>
      </div>
    </div>
</template>
<script>
</script>
