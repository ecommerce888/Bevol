import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import Home from '@/components/Home'
import Practice from '@/components/practiceClub'
import SearchProduct from '@/components/searchProduct'
import Mine from '@/components/mine'
import Skin from '@/components/skin'
import productDetail from '@/components/productDetail'
import hotTopic from '@/components/hotTopic'
import search from '@/components/search'
import Setting from '@/components/setting'
import Login from '@/components/login'
import Personal from '@/components/personal'
import skinManage from '@/components/skin/skinManage'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav,
      children:[
        {
          path:'/',
          name:'Home',
          component:Home
        },
        {
          path:'practice',
          name:'practice',
          component:Practice
        },
        {
          path:'mine',
          name:'mine',
          component:Mine
        },
        {
          path:'personal',
          name:'personal',
          component:Personal
        },
        {
          path:'skin',
          name:'skin',
          component:Skin
        },
        {
          path:'skinManage',
          name:'skinManage',
          component:skinManage
        }
      ]
    },
    {
      path:'/SearchProduct',
      name:'searchProduct',
      component:SearchProduct
    },
    {
      path:'/productDetail',
      name:'productDetail',
      component:productDetail
    },
    {
      path:'/hotTopic',
      name:'hotTopic',
      component:hotTopic
    },
    {
      path:'/search',
      name:'search',
      component:search,
      meta:{ notKeepAlive : true }
    },
    {
      path:'/setting',
      name:'setting',
      component:Setting
    }
  ]
})
