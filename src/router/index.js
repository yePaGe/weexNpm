/* global Vue */
import Router from 'vue-router'

import Cover from '&/pages/cover'
import Home from '&/pages/home'
import Tips from '&/pages/tips'
import Search from '&/pages/search'
import Shopcart from '&/pages/shopcart'
import Mine from '&/pages/mine'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/cover'
    },
    {
      path: '/cover',
      name: '首页图',
      component: Cover
    },
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path: '/tips',
      name: '论坛',
      component: Tips
    },
    {
      path: '/search',
      name: '搜索',
      component: Search
    },
    {
      path: '/shopcart',
      name: '购物车',
      component: Shopcart
    },
    {
      path: '/mine',
      name: '我的',
      component: Mine
    }
  ]
})

module.exports =  router