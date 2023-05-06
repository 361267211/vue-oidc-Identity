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
 
                  this.$router.push("/Home");
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
