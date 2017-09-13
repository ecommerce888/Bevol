<style scoped>
  .top-bar{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 44px;
    padding-right: 12px;
    border-bottom: 1px solid #cccccc;
    background-color: white;
  }
  .top-bar img:nth-child(1){

  }
  .title{
      font-size: 18px;
      color: #4B494C;
  }
</style>
<template>
    <div class="top-bar">
       <slot name="left"><img src="./../img/hole_back.png" alt="" width="44" height="44" v-on:click="back"></slot>
         <p class="title"><slot name="title" ></slot></p>
         <slot name="right"> <img src="./../img/search.png" alt="" width="17" height="17"></slot>
    </div>
</template>
<script>
  export  default {
      name:'topBar',
    props:['title'],
    data () {
      return {
      }
    },
    methods:{
        back(){
//          window.history.go(-1);
          this.$router.go(-1);
        }
    }
  }
</script>
