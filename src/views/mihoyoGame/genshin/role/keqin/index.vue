<template>
  <div>
    <h1>刻晴</h1>
    <button @click="goPage1">跳转到七七</button>
    <button @click="goHomePage1">跳转到homePage1</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goPage1 = () => {
  router.push({ name: 'QiQi' })
}
const goHomePage1 = () => {
  router.push({ name: 'Page1' })
}
</script>

<style scoped></style>
