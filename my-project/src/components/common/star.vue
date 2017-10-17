<style scoped>
 .container{
   position: relative;
   display: inline-block;
   background-color: red;
   vertical-align: middle;
   width: 110px;
   transform: translateY(-13px);
 }
 .container #full{
   position: absolute;
   z-index: 2;
 }
 #full > img{
   margin-left: 5px;
 }
 .container #empty{
   position: absolute;
   left: 0;
   top: 0;
   z-index: 1;
 }
 #empty > img{
   margin-left: 5px;
 }
</style>
<template>
<div class="container">
  <div id="full">
    <img  :src="fullImg" alt="" width="15" height="15" v-for="item in starCount">
  </div>
  <div id="empty">
    <img  :src="emptyImg" alt="" width="15" height="15" v-for="item in 5">
  </div>
</div>
</template>
<script>
  export  default{
      data(){
          return{
              fullImg:'../static/img/star_full.png',
              emptyImg:'../static/img/star_empty.png'
          }
      },
    props: {
      starCount:Number
    }
  }
</script>
