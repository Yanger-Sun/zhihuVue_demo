import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Themelist from '@/components/Themelist'
import ThemeDetail from '@/components/ThemeDetail'
import Content from '@/components/Content'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/theme',
      name: 'Themelist',
      component: Themelist,
      // redirect:"/theme/themedetail",
      // children:[
      //   {path:'/theme/themedetail',component:ThemeDetail},
      //   // {path:'/theme/content',component:Content},
      // ]
    },
    {
      path: '/themedetail',
      name: 'ThemeDetail',
      component: ThemeDetail
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    }
  ]
})
