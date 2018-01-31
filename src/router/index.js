import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShopCart from '@/pages/ShopCart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ShopCart
    }
  ]
})
