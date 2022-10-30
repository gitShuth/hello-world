<template>
  <div>
    <h1>页面1</h1>
    <button @click="goPage2">跳转到页面2</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goPage2 = () => {
  router.push({ name: 'Page2' })
}
</script>

<style scoped></style>
