<template>
  <div>
    <v-md-preview :text="preview"></v-md-preview>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const preview = ref("");

onMounted(() => {
  // preview.value = JSON.parse(window.localStorage.getItem('markdown') as string)
});
</script>

<style scoped></style>
