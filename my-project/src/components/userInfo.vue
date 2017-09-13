<style scoped>
  .user-info{
    padding: 0 12px 12px 12px;
    background-color: white;
  }
  .user-info img,article{
    display: inline-block;
    vertical-align: top;
  }
  .user-info img{
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
</style>
<template>
  <div class="user-info">
    <slot name="userImg">
      <img src="../img/skin_like_bg.png" alt="" width="32" height="32">
    </slot>
    <article>
      <slot name="userName">
        <p>普通小姐</p>
      </slot>
      <slot name="userTag">
        <p>轻干 | 轻敏 | 色素 | 皱纹</p>
      </slot>
    </article>
  </div>
</template>
<script>
  export  default{
    name: 'userInfo',
      data(){
          return{}
      }
  }
</script>
