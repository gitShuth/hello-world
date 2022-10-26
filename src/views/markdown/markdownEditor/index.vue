<template>
  <v-md-editor
    ref="editor"
    v-model="text"
    height="100%"
    @save="clickSave"
    mode="edit"
  ></v-md-editor>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const text = ref('')
const editor = ref()

const clickSave = (text: any, html: any) => {
  window.localStorage.setItem('markdown', JSON.stringify(text))
}

onMounted(() => {
  editor.value?.focus()
})
</script>

<style scoped></style>
