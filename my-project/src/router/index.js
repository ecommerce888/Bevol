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
import Register from '@/components/mine/register'
import skinManage from '@/components/skin/skinManage'
import findDetail from '@/components/practice/findDetail'
import mxOrigin from '@/components/practice/mxOrigin'
import articleDetail from '@/components/practice/articleDetail'
import emptyBottle from '@/components/practice/emptyBottle'
import makeUp from '@/components/practice/makeUp'
import hotTopicList from '@/components/practice/hotTopicList'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: 'practice',
          name: 'practice',
          component: Practice
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine
        },
        {
          path: 'personal',
          name: 'personal',
          component: Personal
        },
        {
          path: 'skin',
          name: 'skin',
          component: Skin
        },
        {
          path: 'skinManage',
          name: 'skinManage',
          component: skinManage
        }
      ]
    },
    {
      path: '/SearchProduct',
      name: 'searchProduct',
      component: SearchProduct
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/hotTopic',
      name: 'hotTopic',
      component: hotTopic
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta: {notKeepAlive: true}
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/findDetail',
      name: 'findDetail',
      component: findDetail
    },
    {
      path: '/mxOrigin',
      name: 'mxOrigin',
      component: mxOrigin
    },
    {
      path: '/articleDetail',
      name: 'articleDetail',
      component: articleDetail
    },
    {
      path: '/emptyBottle',
      name: 'emptyBottle',
      component: emptyBottle
    },
    {
      path: '/makeUp',
      name: 'makeUp',
      component: makeUp
    },
    {
      path: '/hotTopicList',
      name: 'hotTopicList',
      component: hotTopicList
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
  ]
})
