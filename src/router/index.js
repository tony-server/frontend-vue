import Vue from 'vue'
import VueRouter from 'vue-router'
// import {routers, otherRouter, appRouter} from './router'

// 全加载
// import Index from '../components/Index'
// 懒加载
const Index = () => import('../components/Index')

Vue.use(VueRouter)

//export const router = new VueRouter(RouterConfig)

export default new VueRouter({
  routes: [{
    path: '/',
    component: Index
  }]
})
