<template>
  <div>
    <h1>七七</h1>
    <button @click="goPage1">跳转到刻晴</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goPage1 = () => {
  router.push({ name: 'KeQin' })
}
</script>

<style scoped></style>
