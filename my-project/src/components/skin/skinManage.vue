<style scoped>
 .container{
   background-color: white;
   padding: 0;
   margin: 0;
   margin-bottom: 54px;
 }
  .result-container{
    margin-top: 44px;
    padding: 21px 12px 12px 12px;
    background-color: white;
    text-align: center;
  }
 .result-container > img{
   text-align: center;
 }
  .skinSort{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-top: 9px;
  }
 .skinSort > p{
   margin-left: 28px;
   font-size: 20px;
   color: #4A484C;
 }
 .skinSort > p:nth-child(1){
   margin-left: 0;
 }
  .skinChart{
    margin-top: 39px;
  }
  .skinChart > div{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin-top: 19px;
    padding: 2px;
    height: 28px;
    width: 289px;
    border-radius: 50px;
    background-color: #E9E9E9;
    box-sizing: content-box;
    text-align: left;
  }
 .skinChart > div p{
   text-align: center;
   padding: 2px;
   line-height: 24px;
   font-size: 10px;
   color: #4C4C4C;
   background-color: white;
   border-radius: 50px;
 }
 .skinChart > div:nth-child(1){
     margin-top: 0;
     background-color: #FFECD5;
   }
 .skinChart > div:nth-child(2){
   width: 198px;
   background-color: #D9F4CC ;
 }
 .skinChart > div:nth-child(3){
   width: 228px;
   background-color: #FFD5C3;
 }
 .skinChart > div:nth-child(4){
   width: 297px;
   background-color: #B9E5FF;
 }
  .scoreDetail{
    position: relative;
    margin-top: 19px;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: 44px;
    background-color: white;
    border: 1px solid #E8E8E8;
  }
  .score-flex{
    flex-grow: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .score-flex > p{
    margin-left: 10px;
  }
  .line{
    position: absolute;
    left: 50%;
    top:  50%;
    transform: translateY(-50%);
    height: 17px;
    width: 1px;
    background-color: #E8E8E8;
  }
  .title{
    padding: 10px 12px 10px 12px;
    font-size: 14px;
    color: #4C4C4C;
    text-align: left;
    border-top: 1px solid #E8E8E8;
    border-bottom: 1px solid #E8E8E8;
  }
  .main-desc{
    padding: 12px;
    font-size: 15px;
    color: #4A484C;
    line-height: 24px;
    border-bottom: 1px solid #E8E8E8;
  }
  .check-report{
    padding: 10px 12px 10px 12px;
    font-size: 15px;
    color: #AC69FE;
    background-color: #F5F5F5;
    text-align: center;
  }
 .protect-skin-container{
   padding: 12px;
 }
  .protect-skin-container > p:nth-child(1){
    padding-left: 4px;
    font-size: 14px;
    color: #AC69FE;
    border-left: 4px solid #AC69FE;
    text-align: left;
  }
 .protect-skin-container > p:nth-child(2){
   margin-top: 10px;
   font-size: 15px;
   color: #4B4A4C;
   text-align: left;
 }
</style>
<template>
   <div class="container">
     <topbar>
       <img slot="left" src="../../img/hole_back.png" alt="" width="44" height="44" style="visibility: hidden">
       <p slot="title">肤质管理</p>
       <img slot="right" src="../../img/search.png" alt="" width="17" height="17" style="visibility: hidden">
     </topbar>
     <div class="result-container">
       <img src="../../img/girl_skin.png" alt="" width="82" height="82">

       <!--肤质类型-->
       <div class="skinSort">
         <p>O</p>
         <p>S</p>
         <p>N</p>
         <p>T</p>
       </div>
       <!--肤质图表-->
       <div class="skinChart">
         <div>
           <p>轻油</p>
         </div>
         <div>
           <p>轻敏</p>
         </div>
         <div>
           <p>非色素</p>
         </div>
         <div>
           <p>紧致</p>
         </div>
       </div>
     </div>
     <!--评分细则-->
   <div class="scoreDetail">
     <div class="score-flex">
       <img src="../../img/skin_test_detail.png" alt="" width="22" height="22">
       <p>评分细则</p>
     </div>
     <div class="line"></div>
     <div class="score-flex">
       <img src="../../img/skin_test_again.png" alt="" width="22" height="22">
       <p>重新测试</p>
     </div>
   </div>
     <!--end-->
     <!--肤质报告-->
     <p class="title">我的肤质报告</p>
     <p class="main-desc">这类肌肤问题很多，又容易过敏，寻找合适的护肤品就 像在“寻宝”。这类肌肤干燥、脱皮，急需保湿剂的帮 助，但往往对多种护肤品成分过敏。常见的成分如日用 香精，一些清洁剂和防腐剂都容易导致过敏……</p>
     <p class="check-report">查看完整报告</p>
     <!--护肤流程-->
     <p class="title">我的护肤流程</p>
     <div class="protect-skin-container">
       <p>护肤</p>
       <p>这类肌肤问题很多，又容易过敏，寻找合适的护肤品就像在“寻宝”。这类肌肤干燥、脱皮，急需保湿剂的帮助，但往往对多种护肤品成分过敏。常见的成分如日用香精，一些清洁剂和防腐剂都容易导致过敏。</p>
     </div>
     <p class="check-report">更多护肤流程</p>
   </div>
</template>
<script>
  import topbar from '../../components/topBar'
  export default{
      data(){
          return{

          }
      },
    components: {
      topbar
    }
  }
</script>
