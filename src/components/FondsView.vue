<template>
  <div class="common-layout">
    <el-container>

      <el-header>
        <el-row>
          <el-col :span="8"> <el-input v-model="input" placeholder="Name" /></el-col>
          <el-col :span="8"> <el-input v-model="input" placeholder="Event" /></el-col>
          <el-col :span="8"> <el-input v-model="input" placeholder="Please input Name" /></el-col>
        </el-row>
        <el-row>
          <el-button @click="SearchFonds()">Search</el-button>
        </el-row>
      </el-header>

      <el-main>
        <el-table :data="testData.list" stripe style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="email" label="Email" />
        </el-table>
      </el-main>

      <el-footer>

      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>

import { ref, onMounted, reactive } from 'vue';
//导入API
import API from "../plugins/axiosInstance.js";
//import { get, post, getDynamicynamic, getFileUseBlobByPost } from '@/request/http';

interface User {
  date: string
  name: string
  email: string
}


const input = ref('');
const tableData = reactive([
  {
    date: '2016-05-03',
    name: 'Tom',
    email: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    email: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    email: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    email: 'No. 189, Grove St, Los Angeles',
  },
])
const SearchFonds = (row?: User) => {
  let tab = [{
    date: '2016-05-03',
    name: 'Tom',
    email: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    email: 'No. 189, Grove St, Los Angeles',
  }];
  tableData.push(...tab);
  console.log('调用方法。。。');
}

onMounted(() => {
  tableData.length = 0;
  console.log('初始化加载。。。');
  getData();
  //testGetFun();
})


// const testGetApi = p => get('demo2/api/goods', p);

// const testGetFun = async () => {
//   const res = await testGetApi({});
//   console.log(res)
// }

//数据
const testData = reactive({
  list: []
});

//测试请求方法
const getData = function () {
  API({
    url: '/api/Fond/GetContactsByEvent?eventId=1',
    method: 'get'

  }).then((res:any) => {
    testData.list = res.data;
  });
}

</script>
