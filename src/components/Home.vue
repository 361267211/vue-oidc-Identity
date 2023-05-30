<template>
  <el-container class="layout-container-demo" style="height: 100%">
    <!-- 左侧导航栏 -->
    <el-aside width="20%">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><message /></el-icon>Navigator One
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="1-1">Option 1</el-menu-item>
              <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="1-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu /></el-icon>Navigator Two
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="2-4">
              <template #title>Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><setting /></el-icon>Navigator Three
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="3-4">
              <template #title>Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <!-- 右侧布局 -->
    <el-container>
      <!-- 头部导航栏 -->
      <el-header style="text-align: right; font-size: 12px; width: 100%">        
        <div class="toolbar">
          <el-button type="primary" @click="api">调用资源API</el-button>
          <el-button type="primary" @click="refreshToken">更新token</el-button>
          <el-button type="danger" @click="logout">退出登录</el-button>
        </div>
      </el-header>
      <!-- 主题展示区 -->
      <el-main>
        <span>{{res}}</span>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { openIdConnectSettings } from "../oidc";
import { apiSourceConnectSettings } from "../apiSource";
import Oidc from "oidc-client";

import { ref } from "vue";
import { Menu as IconMenu, Message, Setting } from "@element-plus/icons-vue";
import axios from "axios";


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
      console.log("todo something");
      axios
        .get(
          `${apiSourceConnectSettings.apiEndpointIpPort}/api/TestAuth`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          // 处理成功响应
          console.log("data:" + response.data);
          this.res=`${response.data}`;
        })
        .catch((error) => {
          // 处理错误
          console.error(error);
        });
    },
    logout() {
      localStorage.clear();

      let userManager = new Oidc.UserManager(openIdConnectSettings);
      userManager.signoutRedirect();
    },
    async refreshToken() {
      const requestData = new URLSearchParams();
      requestData.append("grant_type", "refresh_token");
      requestData.append("refresh_token", localStorage.getItem("refresh_token"));
      requestData.append("client_id", openIdConnectSettings.client_id);
      requestData.append("client_secret", openIdConnectSettings.client_secret);
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      axios
        .post(
          `${openIdConnectSettings.authority}/connect/token`,
          requestData.toString(),
          config
        )
        .then((response) => {
          // 处理成功响应
          console.log("换取token成功：" + JSON.stringify(response.data));

          //重新存储token
          localStorage.setItem("token", response.data.access_token);
          localStorage.setItem("refresh_token", response.data.refresh_token);
        })
        .catch((error) => {
          // 处理错误
          console.error(error);
        });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
