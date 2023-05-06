import { createRouter, createWebHistory } from 'vue-router';
import CallBack from '../components/CallBack.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Home from '../components/Home.vue';
import { openIdConnectSettings } from "../oidc";
import Oidc from "oidc-client";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/CallBack',
      name: 'CallBack',
      component: CallBack
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})

router.beforeEach((to,from,next)=>{
  console.log('router》》》》》》');
  debugger;
 //有token或者跳转到回调页面则直接执行
 if(localStorage.getItem('token') || to.path == '/CallBack'){
    next()
 }else{
    let mgr = new Oidc.UserManager(openIdConnectSettings);
    mgr.signinRedirect(); //执行重定向 
 }
})

export default router
