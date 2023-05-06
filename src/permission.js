import router from "./router/index.ts";
import Oidc from "oidc-client";
import { openIdConnectSettings } from "./oidc";
 
router.beforeEach((to,from,next)=>{
    console.log('router》》》》》》');
   //有token或者跳转到回调页面则直接执行
   if(localStorage.getItem('token') || to.path == '/callback'){
      next()
   }else{
      let mgr = new Oidc.UserManager(openIdConnectSettings);
      mgr.signinRedirect(); //执行重定向 
   }
})