<template>
  <div>
    <button @click="api">调用API</button>
    <button @click="logout">退出登录</button>
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
      localStorage.getItem('token') ;
      localStorage.clear()


      let userManager = new Oidc.UserManager(openIdConnectSettings);
      userManager.signoutRedirect();

    }
  },
  mounted() {
  
  },
};
</script>

<style scoped></style>
