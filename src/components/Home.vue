<template>
  <div>
    <button @click="api">调用API</button>
    <button @click="logout">退出登录</button>
    <pre>{{ res }}</pre>
  </div>
</template>

<script>
//import {userMgr} from './CallBack.vue'

// var config = {
//   authority: "http://localhost:5001",
//   client_id: "Vue_Client",
//   client_secret: "Vue_Client_Secret",
//   redirect_uri: "http://127.0.0.1:5003/CallBack",
//   response_type: "code",
//   scope: "openid profile api1",
//   post_logout_redirect_uri: "http://localhost:5003/",
//   state:"xyz"
// };
// var mgr = new Oidc.UserManager(config);

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
    }
  },
  mounted() {
  
  },
};
</script>

<style scoped></style>
