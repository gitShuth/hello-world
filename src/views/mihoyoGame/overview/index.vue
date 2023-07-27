<template>
  <div>数据总览</div>
  <button @click="goPage">跳转</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goPage = () => {
  router.push({ name: 'GenshinRole' })
}
</script>

<style scoped></style>
