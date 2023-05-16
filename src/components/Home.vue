<template>
  <el-row class="mb-4">
    <el-button type="primary"  @click="api">调用资源API</el-button>
    <el-button type="success"  @click="logout">更新token</el-button>
    <el-button type="info"  @click="refreshToken">退出登录</el-button>
  </el-row>

  
</template>

<script>
import { openIdConnectSettings} from '../oidc';
import Oidc from "oidc-client";

//element ui
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

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
