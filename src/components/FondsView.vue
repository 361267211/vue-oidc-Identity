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
          <el-table-column prop="id" label="Date" width="180" />
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
import { GetFondByEvent} from '@/Api/FondApi'
interface User {
  id: string
  name: string
  email: string
}


const input = ref('');
const SearchFonds = (row?: User) => {
  testGetFun();

}

onMounted(() => {
})



const testGetFun = async () => {
  const res = await GetFondByEvent({ eventId: '1' });
  testData.list = res;
  console.log(res)
}

//数据
const testData = reactive({
  list: []
});


</script>
