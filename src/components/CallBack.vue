<template></template>

<script>
import Oidc from "oidc-client";
import { openIdConnectSettings} from '../oidc'
 
export default {
    props: {},
    data() {
        return {};
    },
 
    components: {},
 
    methods: {},
    created() {
        let userManager = new Oidc.UserManager(openIdConnectSettings);
         userManager.signinRedirectCallback().then(() => {
            userManager.getUser().then((user) => {
              if(user){
                  localStorage.setItem('userInfo',JSON.stringify(user));
                  debugger;
                  localStorage.setItem('token', user.access_token);
                  localStorage.setItem('refresh_token', user.refresh_token);
 
                  this.$router.push("/Home");//跳转到vue主页
                }else{
                  userManager.signinRedirect(); //执行重定向 
                }
              })
          })
      .catch(function(e) {
        console.error("CallBack 错误信息" + e);
      });
    }
};


</script>
