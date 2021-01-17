import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// var let const区别
// var a = 123; 可以重复声明，没有作用域的概念
// let b = 321; 不可以重复声明，有作用域概念
// const c = 666; 常量（不可以改变的量），不可以重复声明，有作用域概念


const routes = [
  //配置路由
  {
    path: '/',
    redirect: '/login'  //  重定向
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
