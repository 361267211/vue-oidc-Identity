<template>
  <div>
    <button @click="api">调用API</button>
    <button @click="logout">退出登录</button>
    <button @click="refreshToken">更新token</button>
    <pre>{{ res }}</pre>
  </div>
</template>

<script>
import { openIdConnectSettings} from '../oidc';
import Oidc from "oidc-client";

//var mgr = userMgr;
export default {
  name: "Home",
  data() {
    return {
      res: "My Home",
    };
  },

  methods: {
    api() {
      console.log('todo something');
    },
    logout(){
      debugger;
      localStorage.clear()


      let userManager = new Oidc.UserManager(openIdConnectSettings);
      userManager.signoutRedirect();

    },
    refreshToken(){
      debugger;
      console.log('old token:' + localStorage.getItem('token'));
      let mgr = new Oidc.UserManager(openIdConnectSettings);
      let self = this
      mgr.renewToken().then(
        newToken => {
          self.logToken(newToken)
        },
        err => {
          console.log(err)
      }) 
    }
  },
  mounted() {
  
  },
};
</script>

<style scoped></style>
