<template>
  <component v-bind:is="currentView" v-on:navChange="otherChange">
    <!-- 组件在 vm.currentview 变化时改变！ -->
  </component>
</template>
<script>
  import mine from '../components/mine'
  import login from '../components/login'
  import { mapState } from  'vuex'
  export  default{
      data(){
          return{
            currentView: 'login'
          }
      },
    created(){
          this.currentView = this.$store.state.isLogin ? 'mine' : 'login';
    },
    components:{
          mine,
          login
    },
    methods:{
      otherChange:function (data) {
        this.$emit("navChange",data);
        console.log(data);
      }
    }
  }
</script>
