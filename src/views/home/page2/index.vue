<template>
  <div>
    <h1>页面2</h1>
    <button @click="goPage1">跳转到页面1</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const goPage1 = () => {
  router.push({ name: 'Page1' })
}

async function getTestData() {
  try {
    await axios.get('/get/api/test/list').then((res) => {
      console.log(res)
    })
  } catch (error) {
    console.log(error)
  }
}
getTestData()
</script>

<style scoped></style>
